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
import { Camera, Permissions } from "expo";

// import PropTypes from 'prop-types';
import {
  Container,
  Badge,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Footer,
  FooterTab,
  Title
} from "native-base";
// import KeyboardSpacer from 'react-native-keyboard-spacer'
import MessageBubble from "../Chat/MessageBubble";
// var backgroundImage = require('../../assets/HomeScreen/home_background_img.jpg')
//
let scrollHeight;
let scrollWindow;
let apiPollIntervalId;

class ChatScreen extends Component {
  static navigationOptions = {
    header: null
  }
  // static navigationOptions = ({ navigation }) => {
  //   const { state, setParams } = navigation;
  //   // const isInfo = state.params.mode === "info";
  //   // const { user } = state.params;
  //   return {
  //     // title: isInfo
  //     //   ? `${user}'s Contact Info`
  //     //   : `Chat with ${state.params.user}`,
  //     // title: 'The real one',
  //     // headerRight: (
  //     //   <Button
  //     //     title="Camera"
  //     //     onPress={() => {
  //     //       navigation.navigate("CameraScreen", {});
  //     //       // setParams({ mode: isInfo ? "none" : "info" })
  //     //     }}
  //     //   ><Text>Click</Text></Button>
  //     // )
  //   };
  // };

  // state = {
  //   hasCameraPermission: null,
  //   type: Camera.Constants.Type.back
  // };

  // async componentWillMount() {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
  //   this.setState({ hasCameraPermission: status === "granted" });
  // }

  render() {
    // var msgs = this.state.messages || this.props.messages || []
    const messages = [
      { isOwnMessage: false, message: "Hi, How is it working" },
      { isOwnMessage: true, message: "second, How is it working" },
      { isOwnMessage: true, message: "third, How is it working" }
    ];

    const bubbles = messages.map((m, i) => <MessageBubble {...m} key={i} />);

    return (
      <Container behavior="padding" style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" onPress={() => {
                this.props.navigation.navigate("SignInScreen", {})
              }} />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Icon name="camera" onPress={() => {
              this.props.navigation.navigate("CameraScreen", {})
            }} />

          </Right>
        </Header>
        <Body>
          <Title>Body</Title>
        </Body>
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

        <Footer>
          <FooterTab>
            {/* <View style={styles.messageBoxContainer}> */}
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
            {/* </View> */}
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
