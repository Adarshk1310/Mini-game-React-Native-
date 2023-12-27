import {TextInput,View,StyleSheet,Alert,Text, Dimensions, useWindowDimensions,KeyboardAvoidingView, ScrollView} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";


function StartGameScreen({onPickNumber}){

    const [enteredNumber,setEnteredNumber] =useState('')

    const {height} =useWindowDimensions();


     function handleinput(enteredText){
        setEnteredNumber(enteredText);
    }

    function handleInputConfirm(){
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber)||chosenNumber<=0|| chosenNumber>99){
            //alert....
            Alert.alert('Invalid number!','Nummber has to be a number between 1 and 99.',[{text:'Okay',style:'destructive',onPress:resetInputHandler}]);
            return
        }

        onPickNumber(chosenNumber);
        console.log("Valid Number!!")
    }


    function resetInputHandler(){
        setEnteredNumber('');
    }


    const marginTopDistance = height<400?30:100;

    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer,{marginTop:marginTopDistance}]}>
            <Title>Guess My Number</Title>
    <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput style ={styles.nummberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumber} onChangeText={handleinput}/>
        <View style ={styles.buttonContainer}>
        <View style={styles.buttonView}><PrimaryButton onPress ={resetInputHandler  }>Reset</PrimaryButton></View>
        <View style={styles.buttonView}><PrimaryButton onPress ={handleInputConfirm} >Confirm</PrimaryButton></View>
        </View>
        </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
    );

}


export default StartGameScreen;




// const deviceHeight= Dimensions.get('window').height;

const styles =StyleSheet.create({
    screen:{
        flex:1
    },
    rootContainer:{
        flex:1,
        alignItems:'center'
    },
    buttonContainer:{
        margin:3,
        flexDirection:'row'
    },
    buttonView:{
        flex:1
    },
    nummberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:'black',
        borderBottomWidth:2,
        color:'black',
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center'  
    },
  
})