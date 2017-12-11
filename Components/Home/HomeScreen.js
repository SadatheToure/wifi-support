import React, { Component } from "react";
import  {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import  { Button, Container } from "native-base";
// var backgroundImage = require('../../assets/HomeScreen/home_background_img.jpg')

class HomeScreen extends Component{
  // static navigationOptions = {
  //   header: null
  // }
  render() {
    return (
      //   {/* <View style={styles.viewStyle}>
      //     <Image source={backgroundImage} style={{flex: 1, height: null, width: null}}/>
      //   </View>*/}
      <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Wifi Analyser</Text>
            <Text style={styles.title2}>Support</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} block={true}
                onPress={() => this.props.navigation.navigate('SignInScreen')}>
              <Text style={styles.buttonText}>Get Help</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#36c4c0',
	},
	titleContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	title2: {
		fontSize: 30,
		fontWeight: 'bold',
    textAlign: 'center',
	},
	buttonContainer: {
		flex: 2,
		justifyContent: 'center',
	},
	button: {
		width: 200,
		height: 200,
		justifyContent: 'center',
		borderRadius: 150,
		borderWidth: 10,
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

export default HomeScreen;
