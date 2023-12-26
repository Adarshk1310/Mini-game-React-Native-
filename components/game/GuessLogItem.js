import { View,Text,StyleSheet } from "react-native"
import Colors from "../../constants/colors"

function GuessLogItem({roundNumber,guess}){

    return( <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumber}</Text>
        <Text style={styles.itemText}> Opponent's Guess: {guess}</Text>
    </View>
    )
}



const styles =StyleSheet.create({
    listItem:{
       
        borderRadius:8,
        paddingHorizontal:20,
        paddingVertical:12,
        marginVertical:8,
        backgroundColor:'black',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    itemText:{
        fontFamily:'open-sans',
        color:'black',
        fontWeight:'700'
    }
})



export default GuessLogItem