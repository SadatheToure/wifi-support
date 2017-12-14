import React, { Component } from "react";
import  { View, Text, StyleSheet, Linking, Image } from "react-native";
import  { Body, Button, Container, Content, Header, Item, Icon, Input, Left, Title, Right } from "native-base";

var worldKnectImg = require('../../assets/worldKnect.png')

class SignInScreen extends Component {
  static navigationOptions = {
  title: 'SIGN IN',
  };
  render() {
    return (
        <Container style={styles.SignInScreenView}>
          <View style={styles.imageViewStyle}>
              <Image source={worldKnectImg} style={{flex: 2, height: 200, width: 400}}/>
          </View>

          <View style={styles.signInViewStyle}>
           <Item style={styles.inputText}
            rounded>
           <Input placeholder=' Name:'/>
          </Item>

          <Item style={styles.inputText2}
            rounded>
           <Input placeholder=' Account Number:'
             keyboardType="numeric"
           />
          </Item>

          <Button style={styles.chatButton}
            block={true}
            onPress={() => this.props.navigation.navigate('ChatScreen')}>
            <Text style={{ color: 'white', fontWeight: 'bold'}}> GO </Text>
          </Button>

          <Text
             style={styles.externalLink}
             onPress={openHelpPage}
          >
            Forgot your account number?
          </Text>
          </View>
        </Container>
    );
  }
}

function openHelpPage() {
	Linking.openURL('https://wifianalizer.ml/')
}

const styles = StyleSheet.create({
  SignInScreenView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 188, 156,1.0)',
  },
  imageViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButton: {
    marginTop: 20,
    marginLeft: 80,
    marginRight: 80,
  },
  inputText: {
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  inputText2: {
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  SignInText: {
    fontSize: 30,
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  externalLink: {
    fontSize: 12,
    color: 'black',
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 10,
},
})

export default SignInScreen;
