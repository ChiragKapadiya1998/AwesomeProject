import React, { useEffect,useState}from 'react';
import { StyleSheet, Text, View,ScrollView, SafeAreaView,Dimensions } from 'react-native';
import Orientation from 'react-native-orientation';
import { set } from 'react-native-reanimated';

const  BoxScreen =() => {
   
    const [orientation, setOrientation] = useState('');
    const [height1 ,setHeigth]=useState(null);
    const [width1,setWidth]=useState(null);
    const[scrll,setScrll]=useState(true)
 

    
    useEffect(() => {
      const initial = Orientation.getInitialOrientation();
      setOrientation(initial);
      Orientation.addOrientationListener(orientationDidChange);
    },[]);

    
    orientationDidChange = (orientation) => {
        if (orientation === 'LANDSCAPE') {
            setWidth(((Dimensions.get('window').width-480)/4)-26);
            setScrll(false);
            console.log(((Dimensions.get('window').width-480)/4)-26) 
        } else{
            setWidth(((Dimensions.get('window').width-480)/4)+26);
            setHeigth(((Dimensions.get('window').height-650)/8)-3.75);
            setScrll(true);
            console.log(((Dimensions.get('window').height-650)/8)-3.75);
        }

    }
    
    return (
        <ScrollView horizontal={scrll} >
      <SafeAreaView >
        <View style={{}}>
            <View style={{minheight:100, height:100+15,borderColor:'grey',flexDirection:'row',}}>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}> 
                    <Text>1</Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}> 
                    <Text>2</Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}> 
                    <Text>3</Text>
                </View>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:2,justifyContent:'space-between'}}> 
                  <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'flex-start'}}>
                    <Text>A</Text>
                    <Text>E</Text> 
                  </View>
                    <Text style={{alignSelf:'center',justifyContent:'center'}}>B</Text>
                    <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'flex-start'}}>
                    <Text>D</Text>
                    <Text>C</Text> 
                  </View>
                </View>
            </View>
            <View style={{minheight:100,height:15+100,borderColor:'grey',flexDirection:'row',}}>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}> 
                    <Text></Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:"space-between"}}> 
                    <Text>1</Text>
                    <Text style={{alignSelf:'flex-end',}}>2</Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}> 
                    <Text>4</Text>
                </View>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,justifyContent:'space-between'}}> 
                </View>
            </View>
            <View style={{minheight:100,height:15+100,borderColor:'grey',flexDirection:'row',}}>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,alignItems:'flex-end'}}> 
                    <Text>10</Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:'flex-end'}}> 
                    <Text>3</Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}> 
                    <Text>5</Text>
                </View>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,justifyContent:'space-between'}}> 
                </View>
            </View>
            <View style={{minheight:50,height:4+50,borderColor:'grey',flexDirection:'row',}}>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1}}> 
                    <Text></Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,}}> 
                    <Text></Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}> 
                    <Text>6</Text>
                </View>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,}}> 
                </View>
            </View>
            <View style={{minheight:75,height:4+75,borderColor:'grey',flexDirection:'row',}}>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1}}> 
                    <Text></Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,}}> 
                    <Text></Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}> 
                    <Text>7</Text>
                </View>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,}}> 
                </View>
            </View>
            <View style={{minheight:75,height:4+75,borderColor:'grey',flexDirection:'row',}}>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,alignItems:'flex-end'}}> 
                    <Text>8</Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,}}> 
                    <Text></Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}> 
                    <Text>8</Text>
                </View>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,}}> 
                </View>
            </View>
            <View style={{minheight:50,height:4+50,borderColor:'grey',flexDirection:'row',}}>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}> 
                    <Text>11</Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}> 
                    <Text>10</Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:'center',alignItems:'center'}}> 
                    <Text>9</Text>
                </View>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,}}> 
                </View>
            </View>
            <View style={{minheight:50,height:4+50,borderColor:'grey',flexDirection:'row',}}>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,alignItems:'flex-end'}}> 
                    <Text>7</Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,alignItems:'flex-end'}}> 
                    <Text>6</Text>
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:'flex-end',alignItems:'flex-end'}}> 
                    <Text>4</Text>
                </View>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,}}> 
                <Text>5</Text>
                </View>
            </View>
            <View style={{minheight:100,height:4+100,borderColor:'grey',flexDirection:'row',}}>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,alignItems:'flex-end'}}>   
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,alignItems:'flex-end'}}>    
                </View>
                <View style={{minwidth:160,width:width1+160,borderColor:'grey',borderWidth:1,justifyContent:'flex-end',alignItems:'flex-end'}}>    
                </View>
                <View style={{minwidth:80,width:width1+80,borderColor:'grey',borderWidth:1,}}> 
                </View>
            </View>
      </View>
    </SafeAreaView>
        </ScrollView>
      
    )
}

const styles = StyleSheet.create({})
export default BoxScreen;