import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, ViewStyle} from 'react-native'
import { Header, NextButton } from '../components';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type QuestionsProps = 
{
    route: any,
    navigation: any
};

type QuestionsState =
{
    buttonText: string,
    selection: number,
    questionNumber: number,
    numOfQuestions: number,
    selectionColor: string
};

class Questions extends Component<QuestionsProps, QuestionsState> {

  constructor(props: QuestionsProps) {
    super(props)

    this.onPress = this.onPress.bind(this)
  
    this.state = {
      buttonText: "Check",
      selection: 0,
      questionNumber: 0,
      numOfQuestions: this.props.route.params.questions.length,
      selectionColor: 'rgba(255, 255, 255, 0.3)'
    }
  }

  onPress = () => {
    if (this.state.buttonText === "Check") {
      // Check if the selected answer is correct
      if (this.props.route.params.correctAnswers[this.state.questionNumber] === this.state.selection) {
        if (this.state.questionNumber + 1 === this.state.numOfQuestions) {
          // Last question, set buttonText to "Finish"
          this.setState({
            buttonText: "Finish",
            selectionColor: 'rgba(0, 255, 0, 0.3)'
          });
        } else {
          // Not the last question, set buttonText to "Next"
          this.setState({
            buttonText: "Next",
            selectionColor: 'rgba(0, 255, 0, 0.3)'
          });
        }
      } else {
        // Wrong answer, set buttonText to "Try Again"
        this.setState({
          buttonText: "Try Again",
          selectionColor: 'rgba(255, 0, 0, 0.3)'
        });
      }
    } else if (this.state.buttonText === "Next") {
      // Proceed to the next question
      this.setState((prevState) => ({
        questionNumber: prevState.questionNumber + 1,
        selection: 0,
        buttonText: "Check",
        selectionColor: 'rgba(255, 255, 255, 0.3)'
      }));
    } else if (this.state.buttonText === "Finish") {
      // Finish button pressed on the last question, navigate to Home
      this.props.navigation.navigate("Home");
    } else {
      this.setState({
        selection: 0,
        buttonText: "Check"
      })
    }
  };
    
  selectAnswer(answerChoice: number){
    this.state.buttonText != "Next" && (
    this.setState({
      selection: answerChoice,
      selectionColor: 'rgba(255, 255, 255, 0.3)',
      buttonText: "Check"
    }))
  }

  render() {
    const {questions, answers} = this.props.route.params

    const selectedAnswer: ViewStyle = {
      backgroundColor: this.state.selectionColor,
      overflow: 'hidden',
    };

    return (
      <View style={styles.container}>

        <Header goBack={true} navigation={this.props.navigation}/>
        <View style={styles.form}>
          <View style={styles.question}>
            <Text style={styles.questionText}>{this.state.questionNumber + 1}. {questions[this.state.questionNumber]}</Text>
          </View>
          <View style={styles.answers}>
              <TouchableOpacity style={[styles.answer, this.state.selection == 1 && selectedAnswer]} onPress={() => this.selectAnswer(1)}>
                <Text style={styles.answerText}>{answers[this.state.questionNumber][0]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.answer, this.state.selection == 2 && selectedAnswer]} onPress={() => this.selectAnswer(2)}>
                <Text style={styles.answerText}>{answers[this.state.questionNumber][1]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.answer, this.state.selection == 3 && selectedAnswer]} onPress={() => this.selectAnswer(3)}>
                <Text style={styles.answerText}>{answers[this.state.questionNumber][2]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.answer, this.state.selection == 4 && selectedAnswer]} onPress={() => this.selectAnswer(4)}>
                <Text style={styles.answerText}>{answers[this.state.questionNumber][3]}</Text>
              </TouchableOpacity>       
          </View>
        </View>
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
        borderRadius: 15,
        borderWidth: windowWidth * 0.003,
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'transparent'
    },

    answerText: {
        fontSize: windowWidth * 0.035
    }


  });