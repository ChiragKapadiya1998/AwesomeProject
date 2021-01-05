import React,{useState} from 'react'
import { View,Text, Button } from 'react-native';
import ColorCounter from './Components/ColorCounter';

const colorDecrement=15;

 const SquareScreen = ({navigation}) => {
    
    const [red ,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const [blue ,setBlue]=useState(0);
    
    const setcolor=(color,change)=>{
        switch(color){
            case 'red':red+change>255 || red+change<0 ? null: setRed(red+change);
            return;
            case 'green':green + change>255 || green + change<0 ? null: setGreen(green+change);
            return;
            case 'blue':blue +change>255 || blue + change <0 ? null :setBlue(blue+change);
            return;
            default:
            return; 
        }
}
    return (
       <View>
           <Button title='HomeScreen' onPress={()=>navigation.navigate('Home')}/>

           <ColorCounter
                onIncrement={()=>setcolor('red',colorDecrement)}
                onDecrement={()=>setcolor('red',-1*colorDecrement)}
                color='Red'/>
           <ColorCounter
                onIncrement={()=>setcolor('green',colorDecrement)}
                onDecrement={()=>setcolor('green',-1*colorDecrement)}
                color='Green'/>
           <ColorCounter 
                onIncrement={()=>setcolor('blue',colorDecrement)}
                onDecrement={()=>setcolor('blue',-1*colorDecrement)}
                color='blue'/>
                
           <View  style={{width:200,height:200,backgroundColor:`rgb(${red},${green},${blue})`}}/>
       </View>
    )
}

export default SquareScreen;