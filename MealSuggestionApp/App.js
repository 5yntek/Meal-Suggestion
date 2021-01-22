import React from "react";
import { Text, View } from "react-native";
import * as tf from "@tensorflow/tfjs";

class App extends React.Component {
  state = {
    isTfReady: false,
  };

  async componentDidMount() {
    await tf.ready();
    this.setState({ isTfReady: true });
    console.log(this.state.isTfReady);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{this.state.isTfReady ? "Ready" : "Waiting"}</Text>
      </View>
    );
  }
}
//https://dev.to/lankinen/setup-tensorflow-js-to-react-native-expo-project-2110

export default App;
