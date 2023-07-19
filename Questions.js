import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity} from 'react-native'
import Header from './Header';
import { LinearGradient } from 'expo-linear-gradient';
import NextButton from './NextButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Questions extends Component {

    constructor(props) {
      super(props)

      this.onPress = this.onPress.bind(this)
    
      this.state = {
        buttonText: "Check",
        selection: 0,
        questionNumber: 0,
        numOfQuestions: this.props.route.params.questions.length, 
      }
    }

    onPress = () => {
        if (this.state.buttonText === "Check" || this.state.buttonText === "Try Again" ) {
          // Check if the selected answer is correct
          if (this.props.route.params.correctAnswers[this.state.questionNumber] === this.state.selection) {
            if (this.state.questionNumber + 1 === this.state.numOfQuestions) {
              // Last question, set buttonText to "Finish"
              this.setState({
                buttonText: "Finish",
              });
            } else {
              // Not the last question, set buttonText to "Next"
              this.setState({
                buttonText: "Next",
              });
            }
          } else {
            // Wrong answer, set buttonText to "Try Again"
            this.setState({
              buttonText: "Try Again",
            });
          }
        } else if (this.state.buttonText === "Next") {
          // Proceed to the next question
          this.setState((prevState) => ({
            questionNumber: prevState.questionNumber + 1,
            selection: 0,
            buttonText: "Check",
          }));
        } else if (this.state.buttonText === "Finish") {
          // Finish button pressed on the last question, navigate to Home
          this.props.navigation.navigate("Home");
        }
      };
      
    selectAnswer(answerChoice){
        this.state.buttonText != "Next" && (
        this.setState({
            selection: answerChoice
        }))
    }

    render() {

        const {questions, answers} = this.props.route.params

        return (
        <View style={styles.container}>
            <LinearGradient
            colors={['#E3B9DC', '#B3C1E3', '#7BCAEA', '#38D5F3', '#01DEFB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
            >
                <Header goBack={true} navigation={this.props.navigation}/>
                <View style={styles.form}>
                    <View style={styles.question}>
                        <Text style={styles.questionText}>{this.state.questionNumber + 1}. {questions[this.state.questionNumber]}</Text>
                    </View>
                    <View style={styles.answers}>
                        <TouchableOpacity style={styles.answer} onPress={() => this.selectAnswer(1)}>
                            <Text style={styles.answerText}>{answers[this.state.questionNumber][0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.answer} onPress={() => this.selectAnswer(2)}>
                            <Text style={styles.answerText}>{answers[this.state.questionNumber][1]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.answer} onPress={() => this.selectAnswer(3)}>
                            <Text style={styles.answerText}>{answers[this.state.questionNumber][2]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.answer} onPress={() => this.selectAnswer(4)}>
                            <Text style={styles.answerText}>{answers[this.state.questionNumber][3]}</Text>
                        </TouchableOpacity>
                              
                    </View>
                </View>

            </LinearGradient>

            <NextButton onPress={this.onPress} text={this.state.buttonText}/>
        </View>
        )
    }
}

export default Questions

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    gradient: {
      ...StyleSheet.absoluteFillObject, // This makes the LinearGradient fill the entire screen
    },

    form: {
        marginVertical: windowHeight * 0.03,
        padding: windowWidth * 0.05,
        width: windowWidth,
        height: windowHeight * 0.75,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },

    question: {
        width: windowWidth * 0.95,
        flex: 2,
        borderColor: "black",
        borderWidth: windowWidth * 0.0003,
        borderRadius: 3,
        padding: windowWidth * 0.04,
        alignItems: 'center',
        justifyContent: 'center'
    },

    questionText: {
        fontSize: windowWidth * 0.05,
        fontWeight: 'bold'
    },

    answers: {
        width: windowWidth * 0.95,
        flex: 3,
        flexDirection: 'column',
    },

    answer: {
        width: windowWidth * 0.95,
        flex: 1,
        paddingVertical: windowWidth * 0.04,
        paddingLeft: windowWidth * 0.2,
        marginVertical: windowHeight * 0.01,
        borderColor: 'black',
        borderRadius: 8,
        borderWidth: windowWidth * 0.0003,
        justifyContent: 'center',
    },

    answerText: {
        fontSize: windowWidth * 0.04
    }


  });