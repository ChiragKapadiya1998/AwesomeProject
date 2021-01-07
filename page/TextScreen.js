import React,{useState} from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ListScreen from './ListScreen';


const TextScreen = (props) => {
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [password,setPassword]=useState('');
    const [num,setNum]=useState('');
    


    return (
        <View>
            <Text>Enter the Name :</Text>
                <TextInput  
                style={styles.text} 
                autoCapitalize='none'
                autoCorrect={false} 
                value={name}
                onChangeText={(e)=>setName(e)}
                /> 
              <Text>My Name is {name}</Text>
               <Text></Text>
               <Text></Text>
              <Text>Enter the Age :</Text>    
                <TextInput  
                    style={styles.text} 
                    autoCapitalize='none'
                    autoCorrect={false} 
                    value={age}
                    onChangeText={(e)=>setAge(e)}
               />
              <Text>My Name is {age}</Text>
              <Text></Text>
 
                <Text>Enter the Password</Text>
                    <TextInput
                    style={styles.text}
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={password}
                    onChangeText={(e)=>setPassword(e)}
                    />
                {password.length>6  ? <Text>your Enter the 6 characters</Text>:null}

                <Text></Text>
                <Text>Enter the Number:
                </Text>
                <TextInput
                 style={styles.text}
                 value={num}
                 onChangeText={(e)=>setNum(e)}
                />
                <Text>my phone num is  {num}</Text>
                {num.length>10 ? <Text>your enter the 10 Nuuber </Text> :null}
        </View>
    );
}
const styles = StyleSheet.create({
    text:{
        margin:15,
        padding: 10,
        borderWidth: 1,
    }
})

export default TextScreen;