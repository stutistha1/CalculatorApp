import {Alert, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';


export default function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState();

  function addTogether() {
    const newTotal = number1 + number2;
    setTotal(newTotal);
    Alert.alert('Answer', 'Addition: ' + newTotal); // total has the old value in the render
  }
  function subtract() {
    const newTotal = number1 - number2;
    setTotal(newTotal);
    Alert.alert('Answer', 'Subtraction: ' + newTotal); // total has the old value in the render
  }
  function multiply() {
    const newTotal = number1 * number2;
    setTotal(newTotal);
    Alert.alert('Answer', 'Multiplication: ' + newTotal); // total has the old value in the render
  }
  function divide() {
    const newTotal = number1 / number2;
    setTotal(newTotal);
    Alert.alert('Answer', 'Division: ' + newTotal); // total has the old value in the render
  }
  if (total > 0) {
    Alert.alert('Positive Value');
  }
  if (total < 0) {
    Alert.alert('Negative Value');
  }
  if (number1 == 0 && number2 == 0) {
    Alert.alert('The input is 0');
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={v => {
          setNumber1(Number.parseInt(v)); // Use parsed value from onChangeText
        }}
        placeholder="0"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChange={e => {
          setNumber2(Number.parseInt(e.nativeEvent.text)); // or get correct value from nativeEvent onChange
        }}
        placeholder="0"
        keyboardType="numeric"
      />

      <Button onPress={addTogether} title="Add" />
      <Button onPress={subtract} title="Subtract" />
      <Button onPress={multiply} title="Multiply" />
      <Button onPress={divide} title="Divide" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 2,
    padding: 10,
  },
});
