import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { USERS } from "../../data/USERS";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* {USERS.map((story, index) => (
          <Image source={require(story.image)} style={style.story} />
        ))} */}
        {USERS.map((story, index) => (
          //   <Text style={{ color: "white" }}>{`"${story.image}"`}</Text>
          <Image source={story.image} style={style.story} />
        ))}
      </ScrollView>
      <Text style={{ color: "white" }}>Stories</Text>
    </View>
  );
};

const style = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
  },
});

export default Stories;
