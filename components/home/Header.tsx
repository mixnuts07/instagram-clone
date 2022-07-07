import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import IconAdd from "react-native-vector-icons/Octicons";
import IconHeart from "react-native-vector-icons/AntDesign";
import IconMessage from "react-native-vector-icons/AntDesign";
export default function Header() {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Image
          style={style.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <View style={style.iconsContainer}>
        <TouchableOpacity>
          <IconAdd name="diff-added" style={style.icon} size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconHeart name="hearto" style={style.icon} size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.unreadBadge}>
            <Text style={style.unreadBadgeText}>99</Text>
          </View>
          <IconMessage name="message1" style={style.icon} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 40,
    height: 40,
    color: "white",
    marginTop: 20,
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 10,
    bottom: 30,
    width: 25,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
