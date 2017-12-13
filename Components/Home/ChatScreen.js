import React, { Component } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Platform
} from "react-native";
import { Camera, Permissions } from "expo";

// import PropTypes from 'prop-types';
import { Container, Badge, Header, headerRight, Left, Body, Right, Button, Icon, Footer, FooterTab, Title
} from "native-base";
// import KeyboardSpacer from 'react-native-keyboard-spacer'
import MessageBubble from "../Chat/MessageBubble";
// var backgroundImage = require('../../assets/HomeScreen/home_background_img.jpg')
//
let scrollHeight;
let scrollWindow;
let apiPollIntervalId;

export default class ChatScreen extends Component {
  static navigationOptions = {
    title: 'CHAT',
    headerRight: <Button title="Camera" />
  }

  render() {
    // var msgs = this.state.messages || this.props.messages || []
    const messages = [
      { isOwnMessage: false, message: 'Hi, I\'m Alice with AwesomeCo support! How can I help you today?' },
      { isOwnMessage: true, message: 'My wifi is very slow and sometimes I\'m unable to connect to it.' },
      { isOwnMessage: false, message: 'I\'m sorry to hear that. Lets see how we can fix that.' },
      { isOwnMessage: false, message: 'Can you provide me some more details about the situation?' },
      { isOwnMessage: true, message: 'The wifi receiver light is red.' },
      { isOwnMessage: false, message: 'Sure, we can fix that.' },
      { isOwnMessage: true, message: 'Cool, it\'s working now' },
      { isOwnMessage: false, message: 'Anything else I can help you with?' },
      { isOwnMessage: true, message: 'No, thank you' }
    ];


    const bubbles = messages.map((m, i) => <MessageBubble {...m} key={i} />);

    return (
      <Container behavior="padding" style={styles.container}>
        <Body>
          <ScrollView
            style={styles.bubbleContainer}
            ref={scrollView => {
              scrollWindow = scrollView;
            }}
            onLayout={event => {
              scrollHeight = event.nativeEvent.layout.height;
            }}
            onContentSizeChange={(width, height) => {
              if (scrollHeight < height)
                scrollWindow.scrollTo({ y: height - scrollHeight });
            }}
          >
            {bubbles}
          </ScrollView>

        </Body>
        <Footer>
          <FooterTab>

            <TextInput
              value={this.props.composingMessage}
              onChangeText={this.props.onComposeMessageUpdate}
              onSubmitEditing={this.props.onSendMessage}
              returnKeyType="send"
              style={styles.messageBox}
            />
            <TouchableOpacity onPress={this.props.onSendMessage}>
              <Text style={styles.sendButton}>Send</Text>
            </TouchableOpacity>
            {/* <KeyboardSpacer /> */}
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  ChatScreenView: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    justifyContent: "center",
    alignItems: "center"
  },
  bubbleContainer: {
    flex: 1,
    width: 375

  },
  messageBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
    backgroundColor: "#eeeeee",
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  messageBox: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#dddddd",
    backgroundColor: "#ffffff",
    paddingHorizontal: 5,
    marginTop: 5,
    marginLeft: 5
  },
  sendButton: {
    color: "blue",
    marginTop: 15,
    marginLeft: 10,
    marginRight: 5,
    fontSize: 16,
    // fontWeight: "500",
    fontWeight: 'bold',
  }
});
