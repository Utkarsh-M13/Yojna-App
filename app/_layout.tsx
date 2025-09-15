// app/_layout.tsx
import { ThemeProvider } from "@/contexts/ThemeProvider";
import {
  Inter_300Light, Inter_400Regular, Inter_500Medium,
  Inter_600SemiBold, Inter_700Bold, useFonts
} from "@expo-google-fonts/inter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, Stack, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const KEY = "hasSeenOnboarding";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_300Light, Inter_400Regular, Inter_500Medium,
    Inter_600SemiBold, Inter_700Bold,
  });

  const [loading, setLoading] = useState(true);
  const [seenOnboarding, setSeenOnboarding] = useState<boolean | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const v = await AsyncStorage.getItem(KEY);
        if (v === null) {
          await AsyncStorage.setItem(KEY, "false");
          const first = await AsyncStorage.getItem(KEY);
          console.log('first', first)
          setSeenOnboarding(false);
        } else {
          setSeenOnboarding(v === "true");
        }
      } catch (e) {
        console.error("Error accessing AsyncStorage:", e);
      } 
    })();
    setLoading(false);
  }, []);


  // useEffect(() => {
  //   (async () => {
  //     await clearStorage()
  //   })();
  // }, []);


  if (!fontsLoaded || loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (seenOnboarding) return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="details/[id]" options={{ headerShown: false, presentation: "modal" }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );

  if (pathname !== "/onboarding") {
    return (
      <ThemeProvider>
        <Redirect href="/onboarding" />
      </ThemeProvider>
    );
  }

  const clearStorage = async () => {
      try {
        await AsyncStorage.clear();
        console.log('AsyncStorage successfully cleared!');
      } catch (e) {
        console.error('Failed to clear AsyncStorage:', e);
      }
  };
}
