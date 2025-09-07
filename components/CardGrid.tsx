import data from '@/data/yojna.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import FilterPopup from './FilterPopup';
import Item from './Item';
import Search from './Search';

const CardGrid = () => {

  const [favourites, setFavourites] = React.useState<string[] | null>(null);
  const [filterPopupVisible, setFilterPopupVisible] = React.useState(false);
  const [selectedMinistries, setSelectedMinistries] = React.useState<string[]>([]);

  useEffect(() => {
    const handleFetch = async ()  => {
      const storedFavourites = await AsyncStorage.getItem('favourites');
      setFavourites(storedFavourites ? JSON.parse(storedFavourites) : null);
    }

    handleFetch();
  }, [])

  const handlePress = (id: string) => {
    router.push(`/details/${id}`);
  };

  const [filteredData, setFilteredData] = React.useState(data);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filterAndSort = useCallback((selectedMinistries: string[]) => {
    let filtered = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()));
    filtered = filtered.filter(item => !selectedMinistries.length || selectedMinistries.includes(item.ministry));
    const sorted = filtered.sort((a, b) => {
      if (favourites === null) return 0;
      const aFav = favourites.includes(a.id) ? 1 : 0;
      const bFav = favourites.includes(b.id) ? 1 : 0;
      if (aFav === bFav) {
        return a.title.localeCompare(b.title);
      }
      return bFav - aFav;
    });

    setFilteredData(sorted);
  }, [favourites, searchTerm]);

  useEffect(() => {
    filterAndSort(selectedMinistries);
  }, [searchTerm, favourites, filterAndSort]);

  if (favourites === null) {
    return null;
  }

  const handleFavoriteToggle = async (id: string) => {
    let updatedFavourites;
    if (favourites.includes(id)) {
      updatedFavourites = favourites.filter(favId => favId !== id);
    } else {
      updatedFavourites = [...favourites, id];
    }
    await AsyncStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  }

  const search = () => {
    filterAndSort(selectedMinistries);
  }

  const toggleMinistry = (ministry: string) => {
    setSelectedMinistries((prev) => {
      if (prev.includes(ministry)) {
        return prev.filter((m) => m !== ministry);
      }
      return [...prev, ministry];
    });
  }


  return (
    <ScrollView
      style={{
        flex: 1,
        width: "100%",
        marginTop: 48,
        position: 'relative',
      }}
    >
      <Search search={search} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setFilterPopupVisible={setFilterPopupVisible} selectedMinistries={selectedMinistries} />
      {filterPopupVisible && <FilterPopup setPopupVisible={setFilterPopupVisible} toggleMinistry={toggleMinistry} selectedMinistries={selectedMinistries} />}
      <View style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
        gap: "1%",
        paddingBottom: 300,
      }}>
        {filteredData.map((data) => (
        <Item key={data.id} id={data.id} onPress={() => handlePress(data.id)} title={data.title} description={data.description} image={data.image} ministryColor={data.ministryColor} ministry={data.ministry} handleFavoriteToggle={handleFavoriteToggle} favoriteValue={favourites.includes(data.id)} />
      ))}
      </View>
    </ScrollView>
  )
}

export default CardGrid