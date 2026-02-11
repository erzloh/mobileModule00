import * as Haptics from "expo-haptics";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { CalculatorKey } from "@/app";

const keys = [
  ["7", "8", "9", "C", "AC"],
  ["4", "5", "6", "+", "-"],
  ["1", "2", "3", "*", "/"],
  ["0", ".", null, null, "="],
];

type ButtonsProps = {
	updateExpression: (key: CalculatorKey) => void;	
}

export default function Buttons({ updateExpression }: ButtonsProps) {
const [gridWidth, setGridWidth] = useState(0);
const rows = keys.length;
const cols = keys[0]?.length ?? 1;
const cellMax = gridWidth / cols;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "flex-end",
      }}
      onLayout={(e) => {
        setGridWidth(e.nativeEvent.layout.width);
      }}
    >
      {keys.flat().map((k, i) => (
        <View key={i} style={{ width: `${100 / cols}%`, height: `${100 / rows}%`, padding: 3, maxHeight: cellMax }}>
          {k ? (
            <Pressable
              onPress={() => {
                void Haptics.selectionAsync();
                console.log("button pressed:", k);
                updateExpression(k as CalculatorKey);
              }}
              style={({ pressed }) => ({
                width: "100%",
                height: "100%",
                borderRadius: 999,
                backgroundColor: k === "=" ? "#bbb" : "#ddd",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#000",
                borderWidth: 2,
                transform: pressed ? [{ scale: 0.7 }] : [{ scale: 1 }],
              })}
            >
              <Text style={{ fontSize: 18 }}>{k}</Text>
            </Pressable>
          ) : (
            <View style={{ width: "100%", height: "100%" }} />
          )}
        </View>
      ))}
    </View>
  );
}
