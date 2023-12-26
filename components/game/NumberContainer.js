
import { View,Text,StyleSheet } from "react-native"
import Colors from "../../constants/colors";



function NumberContainer({children}){
    
    return (<View style={styles.container}>
        <Text style={styles.NumberText}>{children}</Text>
    </View>)
}




const styles =StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'black',
        padding:24,
        margin:24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'  ,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    NumberText:{
        color:'red',
        fontSize:36,
        fontFamily:'open-sans-bold'
    

    }
})




export default NumberContainer;