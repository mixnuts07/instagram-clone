import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { USERS } from "../../data/USERS";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={story.image} style={style.story} />
            <Text style={{ color: "white" }}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 4,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});

export default Stories;
