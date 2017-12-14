import React, { Component } from "react";
import  { View, Text, StyleSheet, Image, TouchableOpacity
} from "react-native";
import  { Button, Container } from "native-base";

var worldKnectImg = require('../../assets/worldKnect.png')
var helpImg = require('../../assets/help.png')

export default class HomeScreen extends Component{
  static navigationOptions = {
     title: 'Welcome',
  }
  render() {
    return (
      <Container style={styles.container}>
          <View style={styles.imageViewStyle}>
            <Image source={worldKnectImg} style={{flex: 2, height: 200, width: 400}}/>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} block={true}
                onPress={() => this.props.navigation.navigate('SignInScreen')}>
              <Text style={styles.buttonText}>Get Help</Text>
            </TouchableOpacity>
          </View>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(26, 188, 156,1.0)',
	},
  imageViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBtn: {
    flex: 2,
    width: 300,
    height: 300,
    marginRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
    marginBottom: 70,
	},
	button: {
		width: 200,
		height: 200,
		justifyContent: 'center',
		borderRadius: 150,
		borderWidth: 15,
		borderColor: '#8e3429',
		backgroundColor: '#cb3b27',
		padding: 30,
		elevation: 5,
		shadowColor: '#cb3b27',
		shadowOffset: { width: 10, height: 10 },
		shadowOpacity: 0.6,
		shadowRadius: 0,
	},
	buttonText: {
		color: '#ffffff',
		fontSize: 40,
		fontWeight: '400',
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
	},
})
