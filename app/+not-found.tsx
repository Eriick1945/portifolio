import {Link, Stack} from 'expo-router';
import {View,StyleSheet} from 'react-native';

export default function NotFoundScreen(){
    return(
        <>
        <Stack.Screen options={{title:"ops! essa tela ainda não existe rs"}} />
        <View style={styles.container}>
            <Link href="C:\Projetos\meu-projeto\portifolio\app\+not-found.tsx"> Vá para a tela inicial</Link>
        </View>
        </>

    );
}

const styles= StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})