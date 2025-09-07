import { useTheme } from '@/contexts/ThemeProvider';
import React from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';

const Search = ({searchTerm, setSearchTerm, setFilterPopupVisible, selectedMinistries, search} : {searchTerm: string, setSearchTerm: (text: string) => void, setFilterPopupVisible: React.Dispatch<React.SetStateAction<boolean>>, selectedMinistries: string[], search: () => void}) => {
  const {theme} = useTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, margin: 16 }}>
      <View style={{ paddingHorizontal: 16, width: 300, height: 32, backgroundColor: theme.card, borderRadius: 16, marginRight: 8, justifyContent: 'center', position: 'relative' }}>
        <TextInput
          placeholderTextColor={theme.alt}
          style={{ fontSize: 12, color: theme.alt, fontFamily: 'Inter_400Regular' }}
          placeholder="Search"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <View style={{ position: 'absolute', top: 0, right: 0, width: 32, height: "100%", display: "flex", alignItems: "center",  borderTopRightRadius:16, borderBottomRightRadius:16, justifyContent: "center", zIndex: 2, backgroundColor: theme.filter }}>
          <Pressable onPress={() => setFilterPopupVisible((prev) => !prev)} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center",  borderTopRightRadius:16, borderBottomRightRadius:16, justifyContent: "center", zIndex: 2, backgroundColor: 'transparent' }}>
            <Image source={require('@/assets/icons/filter.png')} style={{ width: 16, height: 16 }} />
          </Pressable>
        </View>
      </View>
      <Pressable onPress={search} style={{ paddingHorizontal: 16, paddingVertical: 8, backgroundColor: '#3E6EFF', borderRadius: 16 }}>
        <Image source={require('@/assets/icons/search.png')} style={{ width: 16, height: 16 }} />
      </Pressable>
    </View>
  )
}

export default Search