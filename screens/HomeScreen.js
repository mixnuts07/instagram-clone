import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <Header />
      <Stories />
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
