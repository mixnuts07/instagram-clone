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
      <Icon />
      <Likes post={post} />
      <Caption post={post} />
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

const Icon = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
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

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 0.1 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const style = StyleSheet.create({
  story: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.5,
    borderColor: "#007c00",
  },
  icon: {
    width: 40,
    height: 40,
    color: "white",
    marginTop: 10,
  },
});

export default Post;
