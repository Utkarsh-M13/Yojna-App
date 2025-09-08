import { useTheme } from '@/contexts/ThemeProvider';
import React from 'react';
import { Image, Linking, Platform, Pressable, Share, Text, View } from "react-native";

const Settings = () => {
  const {theme, setMode, isDark} = useTheme();

  const APP_LINK_IOS = "https://apps.apple.com/us/app/your-app-name/id1234567890";
  const APP_LINK_ANDROID = "https://play.google.com/store/apps/details?id=com.yourcompany.yourapp";


  const openMail = () => {
    const email = "utkarsh.majithia13@gmail.com";
    const subject = "Support Request";
    const body = "Hi Utkarsh,";
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.openURL(url).catch(err => console.error("Error opening mail:", err));
  };

  const openFeedbackMail = () => {
    const email = "utkarsh.majithia13@gmail.com";
    const subject = "App Feedback";
    const body = "Hi, I'd like to share some feedback";
    
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(url).catch(err => console.error("Error opening mail:", err));
  };

  const shareApp = async () => {
    const url = Platform.OS === "ios" ? APP_LINK_IOS : APP_LINK_ANDROID;
    const message = `Check out this app! Download it here: ${url}`;
      try {
        const result = await Share.share(
          // Content (platform-specific)
          Platform.select({
            ios:    { url, message, title: "Yojna" }, // iOS shows the URL nicely
            android:{ message, title: "Yojna" },      // Android: put URL in message
            default:{ message, title: "Yojna" },
          })!,
          // Options (platform-specific)
          Platform.select({
            ios:    { subject: "Yojna" },                 // for Mail, etc.
            android:{ dialogTitle: "Share Yojna", subject: "Yojna" },
            default:{},
          })
        );

        if (result.action === Share.sharedAction) {
          if (result.activityType) console.log("Shared via:", result.activityType);
          else console.log("Shared");
        } else if (result.action === Share.dismissedAction) {
          console.log("Dismissed");
        }
      } catch (error: any) {
        console.error("Share error:", error?.message ?? error);
      }
    };

    const rateApp = () => {
      if (Platform.OS === "ios") {
        Linking.openURL("https://apps.apple.com/us/app/your-app-name/id1234567890");
      } else {
        Linking.openURL("https://play.google.com/store/apps/details?id=com.yourcompany.yourapp");
      }
    };
  
  return (
   <View
         style={{
           flex: 1,
           paddingTop: 80,
           backgroundColor: theme.bg,
         }}
       >
        <Text style={{  paddingLeft: 32, fontSize: 24, fontFamily: 'Inter_500Medium', color: theme.text}}>Settings</Text>
        <Pressable onPress={() => {setMode(!isDark ? 'dark' : 'light')}} style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8, paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            { !isDark ? <Image source={require('@/assets/icons/moon.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/sun-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
          <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text }}>{!isDark ? 'Dark Mode' : 'Light Mode'}</Text>
        </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={rateApp}>
          <View style={{flex: 1, flexDirection: 'row'}}>
              { !isDark ? <Image source={require('@/assets/icons/star.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/star-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Rate App</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={shareApp}>
          <View style={{flex: 1, flexDirection: 'row'}}>
              { !isDark ? <Image source={require('@/assets/icons/share.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/share-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Share App</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{Linking.openURL("https://utkarsh-m13.github.io/Yojna-App/privacy.html")}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
              { !isDark ? <Image source={require('@/assets/icons/lock.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/lock-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Privacy Policy</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{Linking.openURL("https://utkarsh-m13.github.io/Yojna-App/terms.html")}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
              { !isDark ? <Image source={require('@/assets/icons/draft.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/draft-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Terms and Conditions</Text>
          </View>
        </Pressable>
        {/* <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}onPress={() =>{}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
              { !isDark ? <Image source={require('@/assets/icons/cookie.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/cookie-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Cookie Policy</Text>
          </View>
        </Pressable> */}
        <Pressable onPress={openMail} style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })}>
          <View style={{flex: 1, flexDirection: 'row'}}>
              { !isDark ? <Image source={require('@/assets/icons/mailBlack.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/mail-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Contact Us</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => ({backgroundColor: pressed ? theme.pressed : 'transparent', marginTop: 8,paddingLeft: 32, paddingBottom: 20, paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" })} onPress={openFeedbackMail} >
          <View style={{flex: 1, flexDirection: 'row'}}>
              { !isDark ? <Image source={require('@/assets/icons/message.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> : <Image source={require('@/assets/icons/message-white.png')} style={{ width: 24, height: 24, marginRight: 12 }} /> }
            <Text style={{ fontSize: 20, fontFamily: 'Inter_400Regular', color: theme.text}}>Feedback</Text>
          </View>
        </Pressable>
        <Text style={{ fontSize: 12, color: theme.alt, paddingHorizontal: 32, marginTop: 'auto', paddingBottom: 32, fontFamily: 'Inter_300Light', lineHeight: 18}}>
          Disclaimer: This app is not affiliated with or endorsed by the Government of India. 
          Information on schemes is sourced from official government websites and presented 
          for informational purposes only.
        </Text>
  </View>
  )
}

export default Settings