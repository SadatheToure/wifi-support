import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
// import PropTypes from 'prop-types';
import { Button, Container } from "native-base";
// import KeyboardSpacer from 'react-native-keyboard-spacer'
import MessageBubble from "../Chat/MessageBubble";
// var backgroundImage = require('../../assets/HomeScreen/home_background_img.jpg')
//
// let scrollHeight
// let scrollWindow
// let apiPollIntervalId

class ChatScreen extends Component {
  // static navigationOptions = {
  //   header: null
  // }
  state = {
    messages: []
  }

  render() {
    var msgs = this.state.messages || this.props.messages || []
    const bubbles = msgs.map((m, i) => <MessageBubble {...m} key={i} />)

    return (
      <View behavior="padding" style={styles.container}>
        <Text style={styles.title}>ChatScreen</Text>
        <ScrollView>
          {bubbles}

          <View style={styles.messageBoxContainer}>
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
          </View>
        </ScrollView>
      </View>

      // 	<ScrollView
      //     style={styles.bubbleContainer}
      //   //   ref={(scrollView) => { scrollWindow = scrollView }}
      //   //   onLayout={event => {
      // 	//   scrollHeight = event.nativeEvent.layout.height
      //   //   }}
      //   //   onContentSizeChange={(width, height) => {
      // 	// if (scrollHeight < height) scrollWindow.scrollTo({ y: hei-scrollHeight })
      //   // }}
      //   >
      // {bubbles}
      //   </ScrollView>
      //
      //   <View style={styles.messageBoxContainer}>
      //    <TextInput
      // 	// value={this.props.composingMessage}
      // 	// onChangeText={this.props.onComposeMessageUpdate}
      // 	// onSubmitEditing={this.props.onSendMessage}
      // 	returnKeyType="send"
      // 	style={styles.messageBox}
      // 				/>
      //   <TouchableOpacity
      //     // onPress={this.props.onSendMessage}
      //     >
      // 		<Text style={styles.sendButton}>Send</Text>
      //   </TouchableOpacity>
      // </View>
      //
      // {spacer}
      // </View>
    );
  }
}

//
// ChatScreen.propTypes = {
// 	messages: PropTypes.array.isRequired,
// 	composingMessage: PropTypes.string,
// 	onComposeMessageUpdate: PropTypes.func.isRequired,
// 	onSendMessage: PropTypes.func.isRequired,
// 	onReceivedMessage: PropTypes.func.isRequired,
// }

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
    flex: 1
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
    paddingHorizontal: 5
  },
  sendButton: {
    color: "blue",
    marginLeft: 10,
    marginRight: 5,
    fontSize: 16,
    fontWeight: "500"
  }
});

export default ChatScreen;
