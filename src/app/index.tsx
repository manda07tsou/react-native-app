import AppText from "@/components/appText";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <AppText type="h1" color="primary">Text h1</AppText>
      <AppText type="h2">Text h2</AppText>
      <AppText type="h3">Text h3</AppText>
      <AppText type="h4">Text h4</AppText>
      <AppText type="p">Paragraphe</AppText>
      <AppText type="small">small</AppText>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
