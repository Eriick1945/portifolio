import { Stack } from "expo-router";

export default function HomeLayout() {
  return <Stack>

    <Stack.Screen name="index"/>
    <Stack.Screen name="details"/>  
    <Stack.Screen name="sobre"/>
    <Stack.Screen name= "forms" />

  </Stack>

    
}
