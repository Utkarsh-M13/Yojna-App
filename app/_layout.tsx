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
    (async () => {
      try {
        const v = await AsyncStorage.getItem(KEY);
        setSeenOnboarding(v === "true");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (!fontsLoaded || loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (seenOnboarding === false && pathname !== "/onboarding") {
    console.log("redirecting to /onboarding");
    return (
      <ThemeProvider>
        <Redirect href="/onboarding" />
      </ThemeProvider>
    );
  }

  // Normal app
  return (
    <ThemeProvider>
      <Stack>
        {/* Optional: customize onboarding route options */}
        <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="details/[id]" options={{ headerShown: false, presentation: "modal" }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
