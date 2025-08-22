import { ImageKey, IMAGES } from '@/utils/images';
import React from 'react';
import { ImageSourcePropType, Pressable, Text, View } from 'react-native';
import Animated, { SharedTransition, withSpring } from 'react-native-reanimated';


const transition = SharedTransition.custom((values) => {
  'worklet';
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
  };
})
  .progressAnimation((values, progress) => {
    'worklet';
    const getValue = (
      progress: number,
      target: number,
      current: number
    ): number => {
      return progress * (target - current) + current;
    };
    return {
      width: getValue(progress, values.targetWidth, values.currentWidth),
      height: getValue(progress, values.targetHeight, values.currentHeight),
    };
  })

    

const Item = ({onPress, title, description, image, ministryColor, ministry }: { title: string; description: string; image: string; ministry: string, ministryColor: string; onPress: () => void }) => {
  const handlePress = () => {
    onPress();
  };

    const imageSource = image ? image : 'generic';
  
    const isKey = (s: string): s is ImageKey => s in IMAGES;
  
    const toSource = (s: string): ImageSourcePropType =>
    /^(https?:|file:|asset:)/.test(s)
      ? { uri: s }
      : (isKey(s) ? IMAGES[s] : IMAGES.generic);

  return (
    <Pressable style={{ width: "45%", aspectRatio: 1, borderRadius: 12, backgroundColor: '#EEEEEE', // iOS
      shadowColor: "rgba(0,0,0,0.25)",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 6,
      marginHorizontal:'1%',
      // Android
      elevation: 8,
      position: 'relative'}} onPress={handlePress}>
      <View style={{width: "100%", height: "100%"}}>
      <View style={{ position: 'absolute', top: 8, right: 8, zIndex: 1, backgroundColor: ministryColor, paddingVertical: 6, paddingHorizontal: 6, borderRadius: 8, borderWidth: 1, borderColor: 'white'}}></View>

      <Animated.Image sharedTransitionTag='Image' sharedTransitionStyle={transition} source={toSource(imageSource)} style={{ width: '100%', height:"55%", objectFit: 'cover', borderTopLeftRadius:12, borderTopRightRadius:12}} />

      <View style={{height: "45%", padding: 8 , display: 'flex', flexDirection: 'column', gap: 4}}>
        <Text style={{ fontSize: 12, fontWeight: 'medium',  color: '222222', letterSpacing: 10 * (-5 / 100), fontFamily: 'Inter_500Medium' }}>{title}</Text>
        <Text style={{ fontSize: 9, color: 'black', letterSpacing: (6 * (-5/100)), fontFamily: 'Inter_400Regular' }}>{description}</Text>
      </View>
    </View>
    </Pressable>
    
  )
}

export default Item