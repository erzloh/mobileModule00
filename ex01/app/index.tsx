import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [flipped, setFlipped] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
		gap: 10,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{flipped ? "hello, you." : "Hello World!"}</Text>
	  <Button onPressIn={() => { console.log('Button pressed'); setFlipped((previousState) => !previousState) }}>click me if you dare</Button>
    </View>
  );
}
