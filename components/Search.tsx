import { useTheme } from '@/contexts/ThemeProvider';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

const Search = ({searchTerm, setSearchTerm} : {searchTerm: string, setSearchTerm: (text: string) => void}) => {
  const {theme} = useTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, margin: 16 }}>
      <View style={{ paddingHorizontal: 16, width: 300, height: 32, backgroundColor: theme.card, borderRadius: 16, marginRight: 8, justifyContent: 'center' }}>
        <TextInput
          placeholderTextColor={theme.alt}
          style={{ fontSize: 12, color: theme.alt, fontFamily: 'Inter_400Regular' }}
          placeholder="Search"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <View style={{ paddingHorizontal: 16, paddingVertical: 8, backgroundColor: '#3E6EFF', borderRadius: 16 }}>
        <Image source={require('@/assets/icons/search.png')} style={{ width: 16, height: 16 }} />
      </View>
    </View>
  )
}

export default Search