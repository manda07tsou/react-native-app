import AppText from "@/components/appText";
import { Card } from "@/components/card";
import { RootView } from "@/components/rootView";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <RootView>
      <View style={{gap: 10}}>
        <Card>
          <AppText type="h4">Titre de card</AppText>
          <AppText color="muted">Paragraphe</AppText>
          <AppText type="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem culpa modi, natus ad officia illo consectetur similique! Rem accusantium nulla temporibus nobis quas magni voluptatum qui, id, doloremque distinctio dolorum!</AppText>
        </Card>
        <Card>
          <AppText type="h4">Titre de card</AppText>
          <AppText color="muted">Paragraphe</AppText>
          <AppText type="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem culpa modi, natus ad officia illo consectetur similique! Rem accusantium nulla temporibus nobis quas magni voluptatum qui, id, doloremque distinctio dolorum!</AppText>
        </Card>
        <Card>
          <AppText type="h4">Titre de card</AppText>
          <AppText color="muted">Paragraphe</AppText>
          <AppText type="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem culpa modi, natus ad officia illo consectetur similique! Rem accusantium nulla temporibus nobis quas magni voluptatum qui, id, doloremque distinctio dolorum!</AppText>
        </Card>

      </View>
    </RootView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
