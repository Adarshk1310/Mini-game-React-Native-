import { StyleSheet,View } from "react-native";
import Colors from "../../constants/colors";

function Card({children}){

    return  <View style ={styles.inputContainer} >{children}</View>
}



const styles =StyleSheet.create({
    inputContainer:{
        marginHorizontal:24,
        marginTop:36,
        borderRadius:8,
        padding:16,
        alignItems:'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        
    },
})


 

export default Card;