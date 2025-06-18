import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router'
export default function Index() {
  return (
    <View style={style.container}>
      <Text>Home</Text>
      <Link href="/details" > Veja os Detalhes</Link>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  }
});