import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View>
      <TouchableOpacity>
        <Image
          style={style.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});
