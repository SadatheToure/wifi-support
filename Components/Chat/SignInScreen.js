import React, { Component } from "react";
import  { View, Text, StyleSheet, Linking } from "react-native";
import  { Button, Container, Item, Input, Content } from "native-base";
// import  { Footer, FooterTab, Button, Icon } from "native-base";
// import  { TabNavigator } from 'react-navigation';
// import SearchTab from './TabNavigator/SearchTab';
// import FavouritesTab from './TabNavigator/FavouritesTab';

class SignInScreen extends Component {
  render() {
    return (
        <Container style={styles.SignInScreenView}>
          <Text> AccountScreen </Text>
          {/* <View style={styles.viewStyle}>
            <Image source={backgroundImage} style={{flex: 1, height: null, width: null}}/>
          </View>*/}

          <Item style={styles.inputText}
            rounded>
           <Input placeholder='My Name:'/>
          </Item>

          <Item style={styles.inputText}
            rounded>
           <Input placeholder='My Account Number:'/>
          </Item>


          <Button style={styles.chatButton}
            block={true}
            onPress={() => this.props.navigation.navigate('ChatScreen')}>
            <Text style={{ color: 'white'}}> Chat </Text>
          </Button>

          <Text
             style={styles.externalLink}
             onPress={openHelpPage}
          >
            Forgot your account number?
          </Text>

        </Container>
    );
  }
}

function openHelpPage() {
	Linking.openURL('https://www.google.com/')
}


const styles = StyleSheet.create({
  SignInScreenView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButton: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  inputText: {
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  externalLink: {
    fontSize: 12,
    color: 'black',
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 10,
},
})

export default SignInScreen;
