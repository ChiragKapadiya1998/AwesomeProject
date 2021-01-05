import React from 'react'
import { Text, View ,Image} from 'react-native'

 const ImageDetils = (props) => {
    return (
      <View>
          <Image  source={props.imageSource}/>
          <Text>{props.title}</Text>
     </View>
    )
}
export default  ImageDetils;