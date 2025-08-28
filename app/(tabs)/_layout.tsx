import { useTheme } from "@/contexts/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  const { theme } = useTheme();
  return (
    <Tabs screenOptions={{
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: theme.bg,
      justifyContent: 'center',
      boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.06)',
      borderTopWidth: 0,       

    },
    tabBarIconStyle: {
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,  // hides the top header completely
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,  // hides the top header completely
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
