import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Platform,
} from "react-native";
import { Container, Badge, Header, Left, Body, Right, Button, Icon, Footer, FooterTab, Title
} from "native-base";

import { Camera, Permissions } from 'expo';

class CameraScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { state, setParams } = navigation;
  //   // const isInfo = state.params.mode === "info";
  //   // const { user } = state.params;
  //   return {
  //     // title: isInfo
  //     //   ? `${user}'s Contact Info`
  //     //   : `Chat with ${state.params.user}`,
  //     title: 'Camera Time!',
  //     headerRight: (
  //       <Button
  //         title="Camera"
  //         onPress={function() {
  //           console.log('state', this.state)
  //           console.log('props', this.props)
  //           // setParams({ mode: isInfo ? "none" : "info" })
  //         }}
  //       ><Text>REC</Text></Button>
  //     )
  //   };
  // };

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {'  '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

export default CameraScreen;
