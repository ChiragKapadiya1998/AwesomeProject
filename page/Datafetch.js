import React,{useReducer} from 'react'
import { Button, Text, View } from 'react-native';

const reducer=(state,action)=>{
  switch(action.type){
      case "CHANGE_NAME":
          return {
             ...state,
              name:action.payload
          }
        case "DATA_FATCH":
            return{
                ...state,
                name:action.payload
            }
        default :
        return state;
  }

}

 const Datafetch = () => {
      
     const istate={
         name:"chirag",
         wish:['apple','banana'],
     };
     const [data ,dispatch]=useReducer(reducer,istate)


     const datafatch=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(res2 =>{
            dispatch({type:"DATA_FATCH",payload:res2[0].name})
        } )
     }
    return (
        <View>
            <Text>
                my name is {data.name}
            </Text>
            <Text>my wish is {data.wish}</Text>
            <Button title='Change Name' onPress={()=>dispatch({type:"CHANGE_NAME",payload:"chiks"})}/>
            <Button title='data fatch' onPress={()=> datafatch() }/>

        </View>
    )
}
export default Datafetch;
