import { Text, View } from "react-native";

type CalcDisplayProps = {
  calcExpression: string;
  calcResult?: string;
};

export default function CalcDisplay({ calcExpression, calcResult }: CalcDisplayProps) {
  return (
    <View style={{ alignItems: "flex-end", gap: 16 }}>
      <Text style={{ fontSize: 36, fontWeight: "bold" }}>{calcExpression}</Text>
      {calcResult ? <Text style={{ fontSize: 24 }}>{calcResult}</Text> : null}
    </View>
  );
}
