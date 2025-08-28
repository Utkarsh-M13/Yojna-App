import { useTheme } from '@/contexts/ThemeProvider';
import React from 'react';
import { Image, Pressable, Text, View } from "react-native";

const Settings = () => {
  const {theme, setMode, mode} = useTheme();
  return (
   <View
         style={{
           flex: 1,
           paddingTop: 80,
           backgroundColor: theme.bg,
         }}
       >
        <Text style={{  paddingLeft: 32, fontSize: 24, fontFamily: 'Inter_500Medium', color: theme.text}}>Settings</Text>
        <Pressable onPress={() => {setMode(mode === 'light' ? 'dark' : 'light')}} style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8, paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            { mode === 'light' ? <Image source={require('@/assets/icons/moon.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/sun-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
          <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text }}>{mode === 'light' ? 'Dark Mode' : 'Light Mode'}</Text>
        </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
              { mode === 'light' ? <Image source={require('@/assets/icons/star.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/star-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Rate App</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
              { mode === 'light' ? <Image source={require('@/assets/icons/share.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/share-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Share App</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
              { mode === 'light' ? <Image source={require('@/assets/icons/lock.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/lock-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Privacy Policy</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
              { mode === 'light' ? <Image source={require('@/assets/icons/draft.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/draft-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Terms and Conditions</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
              { mode === 'light' ? <Image source={require('@/assets/icons/cookie.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/cookie-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Cookie Policy</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
              { mode === 'light' ? <Image source={require('@/assets/icons/mailBlack.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/mail-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Contact Us</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })} onPress={() =>{}} >
          <View style={{flex: 1, flexDirection: 'row'}}>
              { mode === 'light' ? <Image source={require('@/assets/icons/message.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/message-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Feedback</Text>
          </View>
        </Pressable>
  </View>
  )
}

export default Settings