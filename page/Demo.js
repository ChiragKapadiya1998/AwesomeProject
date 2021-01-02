import React, { Component } from 'react'
import {StyleSheet, ActivityIndicator,Button,TextInput, Text, View ,SafeAreaView,Image, Switch,} from "react-native";  


export default class Demo extends Component {
    
    render() {
        return (
            <View>
                <Text onPress={()=>console.log({TextInput})}>Ravi kapadiya</Text>

                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                />

                

                <ActivityIndicator
                color = 'blue'
                size = "large"
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
   
 })