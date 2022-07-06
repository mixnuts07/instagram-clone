import { Text, View, Image, StyleSheet } from "react-native";
import { Divider } from "@rneui/themed";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItem: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItem: "center" }}>
        <Image source={post.profile_picture} style={style.story} />
        <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
          {post.user}
        </Text>
      </View>
      <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
    </View>
  );
};

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={post.imageURL}
      style={{ width: "100%", height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const style = StyleSheet.create({
  story: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.5,
    borderColor: "#ff8501",
  },
});

export default Post;
