import CardGrid from "@/components/CardGrid";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#DCDCDC",
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
