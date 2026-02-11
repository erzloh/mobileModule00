import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalcDisplay from "../components/CalcDisplay";
import Buttons from "@/components/Buttons";

export default function Index() {

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["left", "right", "bottom"]}>
      <View
        style={{
          flex: 1,
          padding: 20,
					gap: 20,
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <CalcDisplay calcText="0" calcResult="0" />
        </View>
        <View style={{ flex: 2, justifyContent: "flex-end" }}>
          <Buttons />
        </View>
      </View>
    </SafeAreaView>
  );
}
