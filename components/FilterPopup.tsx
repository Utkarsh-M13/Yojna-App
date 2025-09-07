import { useTheme } from '@/contexts/ThemeProvider';
import ministries from '@/data/ministries.json';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import MinistryButton from './MinistryButton';

const FilterPopup = ({setPopupVisible, toggleMinistry, selectedMinistries}: {setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>, toggleMinistry: (ministry: string) => void, selectedMinistries: string[]}) => {
  const { theme, mode } = useTheme()
  return (
    <>
    <View style={{ 
      position: 'absolute', 
      top: 64, 
      right: "5%", 
      zIndex: 1000, 
      width: 192, 
      borderRadius: 8, 
      paddingTop: 12, 
      paddingBottom: 12,
      backgroundColor: theme.popup,
      shadowColor: mode === 'dark' ? 'rgba(128,128,128,0.1)' : "rgba(0,0,0,0.1)",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 2,}}>
      <Text style={{ color: theme.text, fontSize: 12, paddingHorizontal: 16 }}>Filter by ministries:</Text>
      {ministries.map((item, index) => (
       <MinistryButton index={index} key={index} color={item.color} ministry={item.ministry} toggleMinistry={toggleMinistry} alreadySelected={selectedMinistries.includes(item.ministry)} />
      ))}
    </View>
    <Pressable onPress={() => {setPopupVisible(false)}} style={{ position: 'absolute', top: 0, right: 0, zIndex: 200, width: '100%', height: '100%', backgroundColor: 'transparent' }}>
    </Pressable>
  </>
  )
}

export default FilterPopup