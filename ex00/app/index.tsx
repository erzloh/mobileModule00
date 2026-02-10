import { Pressable, Text, View } from "react-native";

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
      <Pressable
        onPress={() => {
          console.log("Button pressed");
        }}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 14,
          borderRadius: 8,
          backgroundColor: "#ddd",
        }}
      >
        <Text>click me if you dare</Text>
      </Pressable>
    </View>
  );
}
