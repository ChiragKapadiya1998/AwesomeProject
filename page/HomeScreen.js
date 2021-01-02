import React from 'react';  
import { View, Text, TextInput,Button,StyleSheet } from 'react-native';  



export default  class HomeScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Home Screen</Text> 
                <Button style={style.button} title="Click Me"/>
                <Text style={style.button}>Click Me</Text>
                <Profile/> 
            </View>  
        );  
    }  
}  
class Profile extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    Profile
                </Text>
                <App />
            </View>
        );
    }
}
function App(){
    const [text, setText] = React.useState('');
    return(
        <View>
            <Text>bnvcn</Text>
            <View>
                <TextInput
                style={{width:400}}
                label="Email"
                value={text}
                onChangeText={text => setText(()=>console.log(text))}
                />
            </View>
        </View>
    )
}

const style=StyleSheet.create({
button:{
  margin: 50,
  borderColor:'red',
  borderRadius:2
},
});
