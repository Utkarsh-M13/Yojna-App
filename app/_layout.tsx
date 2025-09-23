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

  const pathname = usePathname() || "";
  const [booting, setBooting] = useState(true);
  const [seenOnboarding, setSeenOnboarding] = useState<boolean | null>(null);
  const [checking, setChecking] = useState(false); // suppress redirects during path-change check

  // Initial read once
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const v = await AsyncStorage.getItem(KEY);
        if (mounted) setSeenOnboarding(v === "true");
      } finally {
        if (mounted) setBooting(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  // Re-check storage whenever the path changes (handles post-onboarding navigation)
  useEffect(() => {
    let mounted = true;
    setChecking(true);
    (async () => {
      try {
        const v = await AsyncStorage.getItem(KEY);
        if (mounted) setSeenOnboarding(v === "true");
      } finally {
        if (mounted) setChecking(false);
      }
    })();
    return () => { mounted = false; };
  }, [pathname]);

  // Loading gates
  if (!fontsLoaded || booting || seenOnboarding === null) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  // Redirects (but do not redirect while `checking` on a path change)
  if (!checking) {
    if (seenOnboarding && pathname.startsWith("/onboarding")) {
      return (
        <ThemeProvider>
          <Redirect href="/(tabs)" />
        </ThemeProvider>
      );
    }
    if (!seenOnboarding && pathname !== "/onboarding") {
      return (
        <ThemeProvider>
          <Redirect href="/onboarding" />
        </ThemeProvider>
      );
    }
  }

  // Always render a Stack as the default branch
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
