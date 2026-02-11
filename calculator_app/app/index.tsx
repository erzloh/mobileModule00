import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalcDisplay from "../components/CalcDisplay";
import Buttons from "@/components/Buttons";
import { useState } from "react"
import { evaluate } from "mathjs";

export type CalculatorKey =
  | "0" | "1" | "2" | "3" | "4"
  | "5" | "6" | "7" | "8" | "9"
  | "C" | "AC"
  | "+" | "-" | "*" | "/"
  | "."
  | "=";

const EXPRESSION_MAX_LEN = 30;

export default function Index() {
	const [calcExpression, setCalcExpression] = useState("");
	const [calcResult, setCalcResult] = useState("");

	function updateExpression(key: CalculatorKey) {
		const expressionLength = calcExpression.length;	
		const expressionLastChar = expressionLength - 1;

		if (key === "C") {
			if (expressionLength > 0) {
				setCalcExpression((prevState) => prevState.slice(0, expressionLastChar));
			}
			return;
		}

		if (key === "AC") {
			setCalcExpression("");
			setCalcResult("");
			return;
		}

		if (key === "+" || key === "*" || key === "/") {
			if (expressionLength === 0 || calcExpression[expressionLastChar] === "+" || calcExpression[expressionLastChar] === "*" || calcExpression[expressionLastChar] === "/" || calcExpression[expressionLastChar] === "-") {
				return;
			}
		}

		if (key === "-") {
			if (calcExpression[expressionLastChar] === "-") {
				return;
			}
		}

		if (key === ".") {
			if (calcExpression[expressionLastChar] === ".") {
				return;
			}

			for (let i = calcExpression.length - 1; i >= 0; i--) {
				if (calcExpression[i] === ".") {
					return;
				}
				if (calcExpression[i] < "0" || calcExpression[i] > "9") {
					break;
				}
			}
		}

		if (key === "=") {
			if (expressionLength === 0 || calcExpression[expressionLastChar] === "+" || calcExpression[expressionLastChar] === "*" || calcExpression[expressionLastChar] === "/" || calcExpression[expressionLastChar] === "-") {
				return;
			}
		
			try {
				setCalcResult(String(evaluate(calcExpression)));
			} catch (error) {
				setCalcResult("Error");
			}
			return;
		}

		if (expressionLength === EXPRESSION_MAX_LEN) {
			return;
		}

		setCalcExpression((prevState) => prevState + key);
	}

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
          <CalcDisplay calcExpression={calcExpression} calcResult={calcResult} />
        </View>
        <View style={{ flex: 2, justifyContent: "flex-end" }}>
          <Buttons updateExpression={updateExpression} />
        </View>
      </View>
    </SafeAreaView>
  );
}
