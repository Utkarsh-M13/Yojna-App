import { useTheme } from '@/contexts/ThemeProvider';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

const MinistryButton = ({ministry, color, index, toggleMinistry, alreadySelected} : {ministry: string, color: string, index: number, toggleMinistry: (ministry: string) => void, alreadySelected: boolean}) => {
  const {theme} = useTheme();
  const [selected, setSelected] = React.useState(alreadySelected);

  const handlePress = () => {
    setSelected((prev) => !prev);
    toggleMinistry(ministry);
  };

  return (
   <Pressable
        onPress={handlePress}
        key={index}
        style={({ pressed }) => ({
          marginTop: 6,
          paddingVertical: 6,
          paddingHorizontal: 16,
          backgroundColor: pressed ? theme.pressed : theme.popup,
          alignSelf: 'flex-start',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
      >
        <View style={{ width: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 6}}>
          <View style={{ width: 12, height: 12, backgroundColor: color, borderRadius: 8, borderWidth: 1, borderColor: 'white' }}></View>
          <Text
          style={{ color: theme.text, fontSize: 10 }}
          numberOfLines={1}
          ellipsizeMode="clip"
          >
          {ministry}
          </Text>
        </View>
        <Pressable onPress={handlePress} style={{width: 16, height: 16,}}>
          {!selected ? <View style={{ width: 16, height: 16, borderWidth: 1, borderColor: theme.border, borderRadius: 4, backgroundColor: 'transparent' }}>
          </View> : <View style={{ width: 16, height: 16, borderWidth: 1, borderColor: theme.border, borderRadius: 4, backgroundColor: '#0571FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('@/assets/icons/check.png')} style={{ width: 12, height: 12 }} />
          </View>}
        </Pressable>
      </Pressable>
  )
}

export default MinistryButton