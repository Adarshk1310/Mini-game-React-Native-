import {View,Text,Pressable,StyleSheet} from'react-native';
import Colors from '../../constants/colors';


function PrimaryButton({children,onPress,style}){



    return(
    <View style={[styles.buttonOuterContainer,style]}>
        <Pressable style={({pressed})=>pressed? [styles.buttonInnerContainer,styles.pressed]:styles.buttonInnerContainer} onPress={onPress} android_ripple={{color:Colors.primary600}}>
        <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
    );
}


const styles =StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        marginVertical:7,
        marginHorizontal:4,
        overflow:'hidden',

    },
    buttonInnerContainer:{
        backgroundColor:'black',
       
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,

    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    pressed:{
        opacity:0.75
    }
})




export default PrimaryButton;