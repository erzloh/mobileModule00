import { Text, View } from "react-native";

type CalcDisplayProps = {
  calcText: string;
  calcResult?: string;
};

export default function CalcDisplay({ calcText, calcResult }: CalcDisplayProps) {
  return (
    <View style={{ alignItems: "flex-end", gap: 16 }}>
      <Text style={{ fontSize: 36, fontWeight: "bold" }}>{calcText}</Text>
      {calcResult ? <Text style={{ fontSize: 24 }}>{calcResult}</Text> : null}
    </View>
  );
}
