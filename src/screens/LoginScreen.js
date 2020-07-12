import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import wave from "../assets/login/wavesNegative.svg";

export default class LoginScreen extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "100%", height: 320, resizeMode: "contain" }}
            source={require("../assets/login/banner.jpg")}
          />
        </View>
        <View>
          <Text>Welcome</Text>
        </View>
      </View>
    );
  }
}
