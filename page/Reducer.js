import React,{useReducer} from 'react'
import { Button, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import ColorCounter from './Components/ColorCounter';

const colorDecrement=15;

const reducer= (state,action) =>{

    switch (action.type){
        case 'red':
            return {
                ...state,
                red: state.red+ action.amount
            };
         case 'green':
             return {
                ...state,
                 green: state.green + action.amount
                };
          case 'blue':
              return{
                 ...state,
                  blue: state.blue + action.amount
                };
          default :
          return state;
    }
  }


const Reducer = ({navigation}) => {
    const [colors,dispatch]=useReducer(reducer,{red:0,green:0,blue:0});   
    
 
    return (
       <View>
           <Button title='HomeScreen' onPress={()=>navigation.navigate('Home')}/>
           <ColorCounter
                onIncrement={()=>dispatch({type:'red',amount:colorDecrement})}
                onDecrement={()=>dispatch({type:'red',amount:-1*colorDecrement})}
                color='Red'/>
           <ColorCounter
                onIncrement={()=>dispatch({type:'green',amount:colorDecrement})}
                onDecrement={()=>dispatch({type:'gree',amount:-1*colorDecrement})}
                color='Green'/>
           <ColorCounter 
                onIncrement={()=>dispatch({type:'blue',amount:colorDecrement})}
                onDecrement={()=>dispatch({type:'blue',amount:-1*colorDecrement})}
                color='blue'/>

            <View  style={{width:200,height:200,backgroundColor:`rgb(${colors.red},${colors.green},${colors.blue})`}}/>
       </View>
    )
}
export default Reducer; 