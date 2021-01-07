import React from 'react';  
import { View, Text, TextInput,Button,StyleSheet ,Platform} from 'react-native';  
import { ScrollView } from 'react-native-gesture-handler';


 const HomeScreen= ({navigation}) =>  {  
     
        return (  
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                    <Text>Home Screen</Text> 
                    <Button style={styles.butto} title='Go To ListScreen ' onPress={() => navigation.navigate('List')}/>
                    <Button title='Go To Buttonscreen' onPress={() => navigation.navigate('Buttons')}/>
                    <Button title='Go To ImageScreen' onPress={() => navigation.navigate('Img')}/>
                    <Button title='Go To DemoScreen' onPress={() => navigation.navigate('DemoScreen')}/>
                    <Button title='Go To CounterScreen' onPress={() => navigation.navigate('CounterScreen')}/>
                    <Button title='Go To ColorScreen' onPress={() => navigation.navigate('ColorScreen')}/>    
                    <Button title='Go To SquareScreen' onPress={() => navigation.navigate('SquareScreen')}/>    
                    <Button title='Go To ReducerScreen' onPress={() => navigation.navigate('ReducerScreen')}/>    
                    <Button title='Go To Datafetch' onPress={() => navigation.navigate('Datafetch')}/>    
                    <Button title='Go To TextScreen' onPress={() => navigation.navigate('TextScreen')}/>    
                    <Button title="Go to Boxscreen" onPress={()=>navigation.navigate('BoxScreen')} />
                </View>  
            </ScrollView>
        );  
 
}  
const styles = StyleSheet.create({
    
})

export default HomeScreen;