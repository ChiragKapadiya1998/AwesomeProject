import React,{useState} from 'react'
import { Button, View ,Text } from 'react-native';



const CounterScreen = () => {
     const [Counter ,setCounter] = useState(0);

    return (
        <View>
            <Button title="HomeScreen" onPress={()=>navigation.navigate('Home')}/>
            
            <Button title='+  Increment' onPress={()=>setCounter(Counter+1)}/>
            <Button title='-  Decrement' onPress={()=>setCounter(Counter-1)}/>
            <Text > this counter :{Counter}</Text>
        </View>
    )
}
export default  CounterScreen;
