
import {Dimensions, StyleSheet} from 'react-native'


const {width, height} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
     width:"100",
     
    },
   centerAlign:{
       justifyContent:'center',
       alignItems:"center"
   },
    logo:{
        width:width /1.2,
        height: height / 3
    },
  });


  export {styles}