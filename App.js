import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';

import { StyleSheet, Text, View, TouchableHighlight, 
  TouchableOpacity } from 'react-native';

import Botao from './Botao';

export default function App() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sinal, setSinal] = useState("");

  const [stringCalculo, setStringCalculo] = useState("0");

  var numeros = [];

  for(var i = 0; i <= 9; i++){
      numeros.push(i);
  }

  function logicaCalculadora(n) {
    if (sinal == '') {
      setFirstNumber(parseInt(firstNumber.toString() + n));
      setStringCalculo(parseInt(firstNumber.toString() + n));    
    } 

    if ((n == '/' || n == '*'|| n == '+' || n == '-') && secondNumber == 0) {
      setStringCalculo(firstNumber.toString() + n)
      setSinal(n);
    }

    if (sinal != '') {
      setSecondNumber(parseInt(secondNumber.toString() + n));
      setStringCalculo(firstNumber + sinal + parseInt(secondNumber.toString() + n));    
    } 

    if (n == '=') {
      let resultado = 0;
      if (sinal == '+' ) {
        resultado = firstNumber + secondNumber;
      }else if(sinal == '-'){
        resultado = firstNumber - secondNumber;

      }else if(sinal == '*'){
        resultado = firstNumber * secondNumber;

      }else if(sinal == '/'){
        resultado = firstNumber / secondNumber;

      }
      setStringCalculo(resultado);
      setSinal('');
      setFirstNumber(resultado);
      setSecondNumber(0);
    }
  }
  

const clearNumber = () => {
  setStringCalculo('0');
  setFirstNumber('');
  setSinal('')
  setSecondNumber('')
}
  
 
  return (
    <View style={{flex:1,backgroundColor:'black',}}>
      <StatusBar hidden />
      <View style={styles.topo}><Text style={{fontSize:24,color:'white'}}>
        {stringCalculo}</Text></View>
      
      <View style={{flexDirection:'row',height:'16.6%',alignItems:'center'}}>

        <TouchableOpacity onPress={() =>logicaCalculadora('+')} 
        style={{width:'20%',backgroundColor:'rgb(20,20,20)'
        ,justifyContent:'center',alignItems:'center',height:'100%'}}>
          <Text style={{fontSize:24,color:'white'}}>+</Text>
          </TouchableOpacity>

        <TouchableOpacity onPress={() =>logicaCalculadora('-')} 
        style={{width:'20%',backgroundColor:'rgb(20,20,20)',
        justifyContent:'center',alignItems:'center',height:'100%'}}>
          <Text style={{fontSize:24,color:'white'}}>-</Text>

          </TouchableOpacity>

        <TouchableOpacity onPress={() =>logicaCalculadora('/')} 
        style={{width:'20%',backgroundColor:'rgb(20,20,20)',
        justifyContent:'center',alignItems:'center',height:'100%'}}>
          <Text style={{fontSize:24,color:'white'}}>/</Text>

          </TouchableOpacity>

        <TouchableOpacity onPress={() =>logicaCalculadora('*')} 
        style={{width:'20%',backgroundColor:'rgb(20,20,20)',
        justifyContent:'center',alignItems:'center',height:'100%'}}>
          <Text style={{fontSize:24,color:'white'}}>*</Text>

          </TouchableOpacity>


           <TouchableOpacity onPress={() =>logicaCalculadora('=')} 
           style={{width:'20%',backgroundColor:'rgb(20,20,20)',
        justifyContent:'center',alignItems:'center',height:'100%'}}>
          <Text style={{fontSize:24,color:'white'}}>=</Text>
  
          </TouchableOpacity>       
          

      </View>
      
      <View 
      style={{flexDirection:'row',flexWrap:'wrap',borderTopColor:'black',
      borderTopWidth:2,height:'66.8%'}}>
          
          <TouchableOpacity onPress={() => logicaCalculadora('0')} style={styles.btn}>
          <Text style={{fontSize:24,color:'white'}}>0</Text>
          </TouchableOpacity>  

          <TouchableOpacity onPress={() => logicaCalculadora('1')} style={styles.btn}>
          <Text style={{fontSize:24,color:'white'}}>1</Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => logicaCalculadora('2')} style={styles.btn}>
          <Text style={{fontSize:24,color:'white'}}>2</Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => logicaCalculadora('3')} style={styles.btn}>
          <Text style={{fontSize:24,color:'white'}}>3</Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => logicaCalculadora('4')} style={styles.btn}>
          <Text style={{fontSize:24,color:'white'}}>4</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => logicaCalculadora('5')} style={styles.btn}>
          <Text style={{fontSize:24,color:'white'}}>5</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => logicaCalculadora('6')} style={styles.btn}>
          <Text style={{fontSize:24,color:'white'}}>6</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => logicaCalculadora('7')} style={styles.btn}>
          <Text style={{fontSize:24,color:'white'}}>7</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => logicaCalculadora('8')} style={styles.btn}>
          <Text style={{fontSize:24,color:'white'}}>8</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => logicaCalculadora('9')} style={styles.btn}>
          <Text style={{fontSize:24,color:'white'}}>9</Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => clearNumber()} style={styles.btn}>
          <Text style={{fontSize:24,color:'white'}}>C</Text>
          </TouchableOpacity> 


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
      topo:{
        backgroundColor:'rgb(20,20,20)',
        height:'16.6%',
        justifyContent:'center',
        paddingLeft:20
      },

      btn: {
        paddingHorizontal: 51,
        paddingVertical: 40,
        borderColor:'rgb(255,255,255)',
        borderBottomColor:'rgb(255,255,255)',
        borderWidth: 1,
      },
});
