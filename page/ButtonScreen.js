import React,{useState} from 'react'
import { View,Button,TouchableOpacity,Text } from 'react-native'

 const ButtonScreen = ({navigation}) => {
     const [Counter ,setCounter]=useState(0);
     return (
       <View>
            <Button title="HomeScreen" onPress={()=>navigation.navigate('Home')}/>
            <TouchableOpacity onPress={()=>console.log("kapadiya ")}>
            <Text>chirag</Text>
            </TouchableOpacity>
            <Button title="Click Me" onPress={()=>setCounter(Counter+1)}/>
            <Text>this is Counter : {Counter}</Text>
       </View>
    )
}
export default ButtonScreen;