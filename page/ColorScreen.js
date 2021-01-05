import React,{useState} from 'react'
import { Button, View ,FlatList, Text} from 'react-native';

 const ColorScreen = ({navigation}) => {
     const [colors,SetColors]=useState([]);
     return (
      <View>
          <Button title='HomeScreen' onPress={()=>navigation.navigate('Home')}/>
          <Button title='Add to Color' 
                  onPress={()=> SetColors([...colors,rendomrgb()])
            }/>
            <View style={{height:100,width:100,backgroundColor: rendomrgb() }}/>
            <Text>counter color</Text>

          <FlatList 
            keyExtractor={item=>item}
            data={colors}
            renderItem={({item}) => {
            return <View style={{ height:100, width:100, backgroundColor: item }}/>
           }}
          />
      </View>
    )
}
const rendomrgb = () => {
    const red= Math.floor(Math.random() * 256);
    const green=Math.floor(Math.random() *256);
    const blue= Math.floor(Math.random() *256);
    return `rgb(${red} ,${green} ,${blue})`;
}

export  default  ColorScreen;