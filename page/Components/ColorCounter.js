import React from 'react'
import { Button, Text, View } from 'react-native';

 const ColorCounter = (props) => {
    
    return (
        <View>
            <Text>{props.color} </Text>

            <Button 
                onPress={()=>props.onIncrement()}
                title= {`increment ${props.color}`} 
            />
            <Button
                onPress={()=>props.onDecrement()}
                title={`decrement ${props.color}`} 
            />

        </View>
    )
}
export default ColorCounter;