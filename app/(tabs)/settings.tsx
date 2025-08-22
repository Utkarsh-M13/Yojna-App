import React from 'react';
import { Image, Pressable, Text, View } from "react-native";

const settings = () => {
  return (
   <View
         style={{
           flex: 1,
           paddingTop: 80,
         }}
       >
        <Text style={{  paddingLeft: 32, fontSize: 24, fontFamily: 'Inter_500Medium' }}>Settings</Text>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? '#CCCCCC' : 'transparent', marginTop: 8, paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={require('@/assets/icons/sun.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
          <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular' }}>Dark Mode</Text>
        </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? '#CCCCCC' : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={require('@/assets/icons/star.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular' }}>Rate App</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? '#CCCCCC' : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={require('@/assets/icons/share.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular' }}>Share App</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? '#CCCCCC' : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={require('@/assets/icons/lock.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular' }}>Privacy Policy</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? '#CCCCCC' : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={require('@/assets/icons/draft.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular' }}>Terms and Conditions</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? '#CCCCCC' : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={require('@/assets/icons/cookie.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular' }}>Cookie Policy</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? '#CCCCCC' : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={require('@/assets/icons/mailBlack.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular' }}>Contact Us</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? '#CCCCCC' : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })} onPress={() =>{}} >
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={require('@/assets/icons/message.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular' }}>Feedback</Text>
          </View>
        </Pressable>
  </View>
  )
}

export default settings