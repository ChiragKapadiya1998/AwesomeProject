import React from 'react';
import {StyleSheet,ScrollView, View ,Image, Alert,TouchableOpacity,Button} from "react-native";
import ImageDetils  from './ImageDetils';

const  ImageScreen= ({navigation}) => {
    return (
        <ScrollView>

            <View>
                <Button title="HomeScreen" onPress={()=>navigation.navigate('Home')}/>
                <TouchableOpacity>
            <Image 
                source={require('../image/4.jpeg')} 
                style={{height:250,width:250,margin:20,}}
                />
                <Image 
                source={require('../image/5.jpeg')} 
                style={{height:250,width:250,margin:20,}}
                />
            
                </TouchableOpacity>
            <ImageDetils title='chirag'  imageSource={require('../image/2.jpeg')}/>
            <ImageDetils title='Ravi'  imageSource={require('../image/3.jpeg')}/>
            <ImageDetils title='Navnit' imageSource={require('../image/4.jpeg')}/>
            </View>
        </ScrollView>
    );
}

export default  ImageScreen;