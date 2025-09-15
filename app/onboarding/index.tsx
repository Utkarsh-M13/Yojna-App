import suggestions from '@/data/suggestions.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function Index() {
  const [page, setPage] = useState(1);

  const [favorites, setFavorites] = useState<string[]>([]);
  type groupKeys = ['farmer','student','senior','women','rural'];
  type Group = groupKeys[number];
  const [selected, setSelected] = useState<Group[]>([]);


  useEffect(() => {
    const handleFetchFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Error fetching favorites from AsyncStorage:', error);
      }
    };
    handleFetchFavorites();
  }, []);

  const addFavorites = () => {
    let newFavs: string[] = [];
    for (const category of selected) {
      newFavs.push(...suggestions[category]);
    }
    const updated = [...favorites, ...newFavs];
    return Array.from(new Set(updated));
  }

  const handleSubmit = async () => {
    try {
      const finalFavorites = addFavorites();

      await AsyncStorage.setItem('favorites', JSON.stringify(finalFavorites));
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      router.replace("/");
    } catch (error) {
      console.error('Error saving favorites to AsyncStorage:', error);
    }
  };

  const toggleSelection = (category: Group) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((item) => item !== category));
    } else {
      setSelected([...selected, category]);
    }
  };

  if (page === 1) return (
    <View
      style={{
        flex: 1,
        width: '100%',
        display: "flex",
        backgroundColor: "#EEEEEE",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image style={{ width: 256, height: 256 }} source={require("@/assets/images/icon.png")}></Image>
      <Pressable onPress={() => setPage(2)} style={{ width: 256, height: 56, borderRadius: 12, marginTop: 360, marginBottom: 0, backgroundColor: '#304DB1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontFamily: "Inter_600SemiBold", color: "#FFFFFF" }}>Get Started</Text>
      </Pressable>
    </View>
  );

  else return (
     <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#EEEEEE",
        paddingHorizontal: 32,
        paddingVertical: 100,
      }}
    >
      <Text style={{ fontSize: 20, fontFamily: "Inter_500Medium", color: 'black', letterSpacing:  20 * (-5 / 100) }}>What groups apply most to you?</Text>
      <Text style={{ fontSize: 12, paddingLeft: 2, fontFamily: "Inter_400Regular", color: '#6E6E6E', letterSpacing:  12 * (-5 / 100), marginBottom: 36 }}>We will use this to show you the most relevant schemes first.</Text>
      <View style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        width: "100%"}}>
        <Pressable onPress={() => {toggleSelection("farmer")}} style={{borderRadius: 12, marginTop: 16, backgroundColor: '#FFFFFF', borderWidth: 1, width: 136, height: 136, borderColor: selected.includes("farmer") ? '#304DB1' : '#C4C4C4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require("@/assets/images/farmer.png")} style={{ width: 92, height: 88, position: 'absolute', top: 12, left: 18 }} />
          <Text style={{ fontSize: 16, fontFamily: "Inter_600SemiBold", color: '#304DB1', position: 'absolute', bottom: 8, letterSpacing: 16 * (-5 / 100) }}>Farmer</Text>
        </Pressable>
        <Pressable onPress={() => {toggleSelection("student")}} style={{borderRadius: 12, marginTop: 16, backgroundColor: '#FFFFFF', borderWidth: 1, width: 136, height: 136, borderColor: selected.includes("student") ? '#304DB1' : '#C4C4C4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require("@/assets/images/student.png")} style={{ width: 92, height: 88, position: 'absolute', top: 12, left: 22 }} />
          <Text style={{ fontSize: 16, fontFamily: "Inter_600SemiBold", color: '#304DB1', position: 'absolute', bottom: 8, letterSpacing: 16 * (-5 / 100) }}>Student</Text>
        </Pressable>
      </View>
      <View style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        width: "100%"}}>
        <Pressable onPress={() => {toggleSelection("senior")}} style={{borderRadius: 12, marginTop: 16, backgroundColor: '#FFFFFF', borderWidth: 1, width: 136, height: 136, borderColor: selected.includes("senior") ? '#304DB1' : '#C4C4C4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require("@/assets/images/senior.png")} style={{ width: 92, height: 88, position: 'absolute', top: 12, left: 20 }} />
          <Text style={{ fontSize: 16, fontFamily: "Inter_600SemiBold", color: '#304DB1', position: 'absolute', bottom: 8, letterSpacing: 16 * (-5 / 100) }}>Senior</Text>
        </Pressable>
        <Pressable onPress={() => {toggleSelection("women")}} style={{borderRadius: 12, marginTop: 16, backgroundColor: '#FFFFFF', borderWidth: 1, width: 136, height: 136, borderColor: selected.includes("women") ? '#304DB1' : '#C4C4C4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require("@/assets/images/women.png")} style={{ width: 92, height: 88, position: 'absolute', top: 12, left: 22 }} />
          <Text style={{ fontSize: 16, fontFamily: "Inter_600SemiBold", color: '#304DB1', position: 'absolute', bottom: 8, letterSpacing: 16 * (-5 / 100) }}>Women</Text>
        </Pressable>
      </View>
      <View style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"}}>
        <Pressable onPress={() => {toggleSelection("rural")}} style={{borderRadius: 12, marginTop: 16, backgroundColor: '#FFFFFF', borderWidth: 1, width: 136, height: 136, borderColor: selected.includes("rural") ? '#304DB1' : '#C4C4C4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require("@/assets/images/rural.png")} style={{ width: 100, height: 88, position: 'absolute', top: 12, left: 16 }} />
          <Text style={{ fontSize: 16, fontFamily: "Inter_600SemiBold", color: '#304DB1', position: 'absolute', bottom: 8, letterSpacing: 16 * (-5 / 100) }}>Rural</Text>
        </Pressable>
      </View>
      <View style={{ width: '100%', marginTop: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Pressable onPress={handleSubmit} style={{ width: 256, height: 56, borderRadius: 12, marginTop: 20, marginBottom: 0, backgroundColor: '#304DB1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontFamily: "Inter_600SemiBold", color: "#FFFFFF" }}>See Schemes</Text>
        </Pressable>
      </View>
      

    </View>
  )
}