import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export const Button = (props) => {
  return (
    <View>

        <Text
        onPress={() => props.logicaCalculadora(props.numero)}
         style={{color: 'white'}}>
            {props.numero}
        </Text>

    </View>
  )
}

const styles = StyleSheet.create({

})