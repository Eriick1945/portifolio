import { Stack } from "expo-router";

export default function HomeLayout() {
  return <Stack
        screenOptions={{
      headerStyle: {
        backgroundColor: '#fd0303'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold', 
      },
    }}>

    <Stack.Screen name="index"/>
    <Stack.Screen name="details"/>  

  </Stack>

    
}
