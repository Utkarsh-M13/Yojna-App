import CardGrid from "@/components/CardGrid";
import { useTheme } from "@/contexts/ThemeProvider";
import { View } from "react-native";

export default function Index() {
  const { theme } = useTheme();
  
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.bg,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        overflow: "scroll"
      }}
    >
      <CardGrid />
    </View>
  );
}
