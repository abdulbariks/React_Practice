import { useState } from "react";

export default function Cricket() {
  const [runs, setRuns] = useState(0);
  const [single, setSingle] = useState(0);
  const [double, setDouble] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [six, setSix] = useState(0);

  const singleRun = () => {
    const updatedRun = runs + 1;
    const updatedSingle = single + 1;
    setRuns(updatedRun);
    setSingle(updatedSingle);
  };
  const doubleRun = () => {
    const updatedRun = runs + 2;
    const updatedDouble = double + 1;
    setRuns(updatedRun);
    setDouble(updatedDouble);
  };
  const handleThree = () => {
    const updatedRun = runs + 3;
    const updatedThree = three + 1;
    setRuns(updatedRun);
    setThree(updatedThree);
  };
  const handleFour = () => {
    const updatedRun = runs + 4;
    const updatedFour = four + 1;
    setRuns(updatedRun);
    setFour(updatedFour);
  };
  const handleFive = () => {
    const updatedRun = runs + 5;
    const updatedFive = five + 1;
    setRuns(updatedRun);
    setFive(updatedFive);
  };
  const handleSix = () => {
    const updatedRun = runs + 6;
    const updatedSix = six + 1;
    setRuns(updatedRun);
    setSix(updatedSix);
  };
  return (
    <div>
      <h2>Total Run: {runs}</h2>
      <h2>Total Single: {single}</h2>
      <h2>Total Double: {double}</h2>
      <h2>Total Three: {three}</h2>
      <h2>Total Four: {four}</h2>
      <h2>Total Five: {five}</h2>
      <h2>Total Six: {six}</h2>
      <button onClick={singleRun}>1</button>
      <button onClick={doubleRun}>2</button>
      <button onClick={handleThree}>3</button>
      <button onClick={handleFour}>4</button>
      <button onClick={handleFive}>5</button>
      <button onClick={handleSix}>6</button>
    </div>
  );
}
