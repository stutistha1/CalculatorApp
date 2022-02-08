import {Text, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';



export default function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [add, setAdd] = useState();
  const [sub, setSub] = useState();
  const [multiply, setMultiply] = useState();
  const [divide, setDivide] = useState();

  
  useEffect(() => {
    setAdd(number1+number2)
    setSub(number1-number2)
    setMultiply(number1*number2)
    setDivide(number1/number2),
    [number1,number2]
  });


  const clear = () => {
    setNumber1();
    setNumber2();
    setAdd();
    setSub();
    setMultiply();
    setDivide();
  };


  return (
    <SafeAreaView style={styles.container}>
      
      <TextInput
        style={styles.input}
        onChangeText={v => {
          setNumber1(Number.parseInt(v)); // Use parsed value from onChangeText
        }}
        placeholder="Enter First Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChange={e => {
          setNumber2(Number.parseInt(e.nativeEvent.text)); // or get correct value from nativeEvent onChange
        }}
        placeholder="Enter Second Number"
        keyboardType="numeric"
      />

      <Text style={styles.text}>Addition: {add} </Text>
      <Text style={styles.text}>Subtraction: {sub} </Text>
      <Text style={styles.text}>Multiplication: {multiply} </Text>
      <Text style={styles.text}>Division: {divide} </Text>

      <Button onPress={clear} title = "Clear" />
      
      
      {number1 === 0 && number2 === 0 ? (
        <Text style={styles.text}>Both inputs are 0</Text>
      ) : (
        <Text>{null}</Text>
      )}
      {add < 0 && sub < 0 && multiply <0 && divide < 0 ? (
        <Text style={styles.text}>The outputs are negative</Text>
      ) : add > 0 && sub > 0 && multiply > 0 && divide >0 ? (
        <Text style={styles.text}>The outputs are positive</Text>
      ) : (
        <Text>{null}</Text>
      )}

    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 2,
    padding: 10,
    fontSize:20,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'black'
  }
});

