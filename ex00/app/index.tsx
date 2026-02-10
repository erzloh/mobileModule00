import { Button } from "@react-navigation/elements";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
		gap: 10,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>hello, you.</Text>
	  <Button onPressIn={() => { console.log('Button pressed') }}>click me if you dare</Button>
    </View>
  );
}
