import { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

import "./BMICalculator.css";

const Calculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));
    }
  };

  return (
    <div>
      <First />
      <div className="bmi-calculator">
        <h2>Quick BMI Calculator</h2>
        <div className="input-fields">
          <div className="input-group">
            <label>Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi !== null && (
          <div className="result">
            <h3>Your BMI:</h3>
            <p>{bmi}</p>
          </div>
        )}
      </div>

      <Second />
      <Third />
    </div>
  );
};

export default Calculator;
