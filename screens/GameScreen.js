import { Text,View,StyleSheet,Alert, FlatList, useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  } 


  let minBoundary =1;
  let maxBoundary =100;

 function GameScreen({userNumber,gameOverHandler}){

    const intialGuess =generateRandomBetween(1,100,userNumber);
    const [currentGuess,setCurrentGuess] =useState(intialGuess);
    const [guessRounds,setGuessRounds] =useState([intialGuess]);
    const {width,height} =useWindowDimensions();
    

    useEffect(()=>{
        if(currentGuess===userNumber){
            gameOverHandler(guessRounds.length);
        }
    },[currentGuess,userNumber,gameOverHandler]);

    useEffect(()=>{
        minBoundary=1;
        maxBoundary=100;
    },[])
    


    function nextGuessHandler(direction){       
        if((direction==='lower'&& currentGuess<userNumber) ||(direction==='greater'&& currentGuess>userNumber)){
            Alert.alert("Don't Lie!!","You Know that is wrong...",[{text:'Sorry!',style:'cancel'}])
            return;
        }
        if(direction==='lower'){
            maxBoundary=currentGuess;
        }else{
            minBoundary = currentGuess + 1;

        }
        const  newRndNum = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNum);
        setGuessRounds(prev=>[newRndNum, ...prev])

    }


    const guessRoundsLength= guessRounds.length;


    let content = (<>
                <NumberContainer>{currentGuess}</NumberContainer>
             <Card>
            <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
            <View style={styles.buttonsContainer}>  
               <View style={styles.buttonContainer}><PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}><Ionicons name="md-remove" size={24} color="white" /></PrimaryButton></View>
               <View style={styles.buttonContainer}><PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}><Ionicons name="md-add" size={24} color="white" /></PrimaryButton></View>
            </View>

            </Card>
    </>)
    

    if(width > 500){
        content= (<> 
            <View style={styles.buttonsContainerWide}>
               <View style={styles.buttonContainer}><PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}><Ionicons name="md-remove" size={24} color="white" /></PrimaryButton></View>
                 <NumberContainer>{currentGuess}</NumberContainer>
               <View style={styles.buttonContainer}><PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}><Ionicons name="md-add" size={24} color="white" /></PrimaryButton></View>

            </View>
        </>)
}


    return ( <View style={styles.screen}>
        
        <Title>Opponent's Guess</Title>
         {content}
        <View style={styles.listContainer}>
            
            <FlatList 
            data={guessRounds} 
            renderItem={(itemData)=><GuessLogItem roundNumber={guessRoundsLength - itemData.index} guess={itemData.item}/>}
            keyExtractor={(item)=>item}
            />
        </View>
    </View>
    )
 }  



 const styles =StyleSheet.create({
    screen:{
        flex:1,
        marginTop:20,
        padding:24,
        alignItems:'center'

    },
    buttonsContainerWide:{
        flexDirection:'row',
        alignItems:'center'
    },
    instructionText:{
        marginBottom:12
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    },
    listContainer:{
        flex:1,
        padding:16,

    }
    
 })




 export default GameScreen; 