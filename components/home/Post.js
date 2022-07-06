import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "@rneui/themed";
import IconLike from "react-native-vector-icons/AntDesign";
import IconLiked from "react-native-vector-icons/AntDesign";
import IconMessage from "react-native-vector-icons/Feather";
import IconSend from "react-native-vector-icons/Feather";
import IconSave from "react-native-vector-icons/AntDesign";
import IconSaved from "react-native-vector-icons/Entypo";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
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
        <Text
          style={{
            color: "white",
            marginLeft: 5,
            fontWeight: "700",
            top: 10,
          }}
        >
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

const PostFooter = () => <Icon />;

const Icon = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <IconLike name="hearto" style={style.icon} size={20} />
        {/* <IconLiked name="heart" style={style.icon} size={20} /> */}
        <IconMessage name="message-circle" style={style.icon} size={20} />
        <IconSend name="send" style={style.icon} size={20} />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconSave name="save" style={style.icon} size={20} />
        {/* <IconSaved name="save" style={style.icon} size={20} /> */}
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  story: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.5,
    borderColor: "#ff8501",
  },
  icon: {
    width: 40,
    height: 40,
    color: "white",
    marginTop: 10,
    marginLeft: 0.1,
  },
});

export default Post;
