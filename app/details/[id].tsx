import data from '@/data/yojna.json';
import { ImageKey, IMAGES } from '@/utils/images';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Dimensions, Image, ImageSourcePropType, Linking, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Animated, { SharedTransition, SharedTransitionType, withSpring } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const IMG_H = Math.round(Dimensions.get('window').height * 0.30);

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
  .defaultTransitionType(SharedTransitionType.ANIMATION);

export default function Details() {
  const {id} = useLocalSearchParams();
  const {
    title,
    ministry,
    ministryColor,
    sector,
    number,
    email,
    target,
    amount,
    provision,
    requirements,
    process,
    link ,
    image 
  } = data.find(item => item.id === id) || {};

  const imageSource = image ? image : 'generic';

  const isKey = (s: string): s is ImageKey => s in IMAGES;

  const toSource = (s: string): ImageSourcePropType =>
  /^(https?:|file:|asset:)/.test(s)
    ? { uri: s }
    : (isKey(s) ? IMAGES[s] : IMAGES.generic);

  const clampChars = (s: string | undefined | null, max = 20) => {
    if (!s) return '';
    const units = Array.from(s);               // Unicode-safe
    if (units.length <= max) return s;
    return units.slice(0, max - 1).join('') + '…'; // keep total ≤ max incl. ellipsis
  };

    const insets = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
        <Pressable style={{position: 'absolute', top: 24, left: 16, zIndex: 1}} onPress={() => {router.back()}}>
          <Image style={{ width: 48, height: 48}} source={require('@/assets/icons/back.png')}></Image>
        </Pressable>
      <ScrollView style={{width: '100%' , flex:1 , display:'flex',
      }}>
        
        <View style={{backgroundColor: '#EEEEEE', width: '100%',}}>
          <Animated.Image sharedTransitionTag='Image' sharedTransitionStyle={transition} source={toSource(imageSource)} style={{ width: '100%', height: IMG_H }} />
          <View style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', paddingHorizontal: 16, paddingVertical: 12}}>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems: 'flex-start', marginBottom: 12}}>
              <View>
              <Text style={{fontSize: 20, fontFamily: 'Inter_500Medium', letterSpacing: 20 * (-5 / 100)}}>{clampChars(title)}</Text>
              <Text style={{fontSize: 14, marginLeft: 1, fontFamily: 'Inter_300Light', letterSpacing: 14 * (-5 / 100)}}>{sector}</Text>
              </View>
              <Text style={{fontSize: 12, fontFamily: 'Inter_500Medium', letterSpacing: 12 * (-5 / 100), backgroundColor: ministryColor, paddingHorizontal: 7, color:'white', paddingVertical: 3, borderRadius: 10}}>{ministry}</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row', alignItems: 'center', marginBottom: 8}}>
            <Image source={require('@/assets/icons/phone.png')} style={{ width: 12, height: 12, marginRight: 8}} />
            <Text style={{color: '#106AE0', fontSize: 10, fontFamily: 'Inter_400Regular'}}>{number}</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row', alignItems: 'center', marginBottom: 32}}>
              <Image source={require('@/assets/icons/mail.png')} style={{ width: 12, height: 12, marginRight: 8}} />
              <Text style={{color: '#106AE0', fontSize: 10, fontFamily: 'Inter_400Regular'}}>{email}</Text>
            </View>
            <View style={{display:'flex', flexDirection:'column', marginBottom: 16}}>
              <Text style={{fontFamily:'Inter_600SemiBold', color:'#545454', fontSize: 16, letterSpacing: 12 * (-5 / 100), marginBottom: 4}}>Target Audience</Text>
              <Text style={{fontFamily:'Inter_300Light', color:'#545454', fontSize: 12}}>{target}</Text>
            </View>
            <View style={{display:'flex', flexDirection:'column', marginBottom: 16}}>
              <Text style={{fontFamily:'Inter_600SemiBold', color:'#545454', fontSize: 16, letterSpacing: 12 * (-5 / 100), marginBottom: 4}}>Amount</Text>
              <Text style={{fontFamily:'Inter_300Light', color:'#545454', fontSize: 12}}>{amount}</Text>
            </View>
            <View style={{display:'flex', flexDirection:'column', marginBottom: 16}}>
              <Text style={{fontFamily:'Inter_600SemiBold', color:'#545454', fontSize: 16, letterSpacing: 12 * (-5 / 100), marginBottom: 4}}>Provisions</Text>
              <Text style={{fontFamily:'Inter_300Light', color:'#545454', fontSize: 12}}>{provision}</Text>
            </View>
            <View style={{display:'flex', flexDirection:'column', marginBottom: 16}}>
              <Text style={{fontFamily:'Inter_600SemiBold', color:'#545454', fontSize: 16, letterSpacing: 12 * (-5 / 100), marginBottom: 4}}>Requirements</Text>
              {requirements ? requirements.map((item, index) => <View key={index} style={{display:'flex', flexDirection:'row', alignItems: 'center', marginBottom: 4}}>
                              <Image source={require('@/assets/icons/chevron.png')} style={{width: 16, height: 16, marginRight: 4}} />
                              <Text style={{fontFamily:'Inter_300Light', color:'#545454', fontSize: 12}}>{item}</Text>
              </View>) : null}
            </View>
            <View style={{display:'flex', flexDirection:'column', marginBottom: 24}}>
              <Text style={{fontFamily:'Inter_600SemiBold', color:'#545454', fontSize: 16, letterSpacing: 12 * (-5 / 100), marginBottom: 4}}>Application Process</Text>
              <Text style={{fontFamily:'Inter_300Light', color:'#545454', fontSize: 12}}>{process}</Text>
            </View>
            <Pressable style={{width:180, height:40, marginHorizontal: 'auto',  justifyContent: 'center', alignItems: 'center', marginBottom:16}} onPress={() => {Linking.openURL(link ? link : '')
            }}>
              <View style={{ width:180, height:40, backgroundColor:'#36BE38', borderRadius:12, display:'flex', justifyContent: 'center', alignItems: 'center', elevation:8, shadowColor: "rgba(0,0,0,0.25)", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 6,}}><Text style={{fontFamily:'Inter_500Medium', color:'white', fontSize: 16}}>Apply Now</Text></View>
            </Pressable>
            </View>
            

       </View>
      </ScrollView>
      </SafeAreaView>
    </>
  );
}
