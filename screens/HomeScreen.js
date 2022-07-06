import { View, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <Header />
      <Stories />
      <Post />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default HomeScreen;
