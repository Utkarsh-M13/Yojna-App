import data from '@/data/yojna.json';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import Item from './Item';
import Search from './Search';

const CardGrid = () => {

  const handlePress = (id: string) => {
    router.push(`/details/${id}`);
  };

  const [filteredData, setFilteredData] = React.useState(data);
  const [searchTerm, setSearchTerm] = React.useState('');

  useEffect(() => {
    const filtered = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filtered);
  }, [searchTerm]);

  return (
    <ScrollView
      style={{
        flex: 1,
        width: "100%",
        marginTop: 48,
      }}
    >
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
        <Item key={data.id} onPress={() => handlePress(data.id)} title={data.title} description={data.description} image={data.image} ministryColor={data.ministryColor} ministry={data.ministry}/>
      ))}
      </View>
    </ScrollView>
  )
}

export default CardGrid