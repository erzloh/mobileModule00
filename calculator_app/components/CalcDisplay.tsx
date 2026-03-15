import { Text, View } from "react-native";

type CalcDisplayProps = {
  calcExpression: string;
  calcResult?: string;
};

export default function CalcDisplay({ calcExpression, calcResult }: CalcDisplayProps) {
  const expressionText = calcExpression.length > 0 ? calcExpression : "0";
  const resultText = calcResult && calcResult.length > 0 ? calcResult : "0";

  return (
    <View style={{ alignItems: "flex-end", gap: 16 }}>
      <Text style={{ fontSize: 36, fontWeight: "bold" }}>{expressionText}</Text>
      <Text style={{ fontSize: 24 }}>{resultText}</Text>
    </View>
  );
}
