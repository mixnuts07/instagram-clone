import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/home/Header";
const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <Header />
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
