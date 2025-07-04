import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup'; 

const scheme = yup.object ({
    username: yup.string().required(" Informe o nome do colaborador ")

})   

export default function formsScreen() {
    const { control, handleSubmit, formState: { errors } } = useForm({});

    function handleSingIn() {
      
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo(a) ao Parque Tecnológico</Text>

            <Controller
                control={control}
                name="username"
                render={({ field: { onBlur, onChange, value } }) => (
                    <TextInput 
                        style={styles.input}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Nome do Funcionário"
                    />
                )}
            />
            
            <Controller 
                control={control}
                name="matricula"
                rules={{ required: "Matrícula é obrigatória" }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                            const numericText = text.replace(/[^0-9]/g, '');
                            onChange(numericText);
                        }}
                        value={value}
                        placeholder="Matrícula do Funcionário"
                        keyboardType="number-pad"
                    />
                )}
            />
            
            <Controller 
                control={control}
                name="patrimonio"
                rules={{ required: "Patrimônio é obrigatório" }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                            const numericText = text.replace(/[^0-9]/g, '');
                            onChange(numericText);
                        }}
                        value={value}
                        placeholder="Patrimônio da máquina"
                        keyboardType="number-pad"
                    />
                )}
            />
            
            <Controller
                control={control}
                name="hostname"
                render={({ field: { onBlur, onChange, value } }) => (
                    <TextInput 
                        style={styles.input}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Digite o Hostname da Máquina"
                    />
                )}
            />

            <TouchableOpacity 
                style={styles.button} 
                onPress={handleSubmit(handleSingIn)}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#4285f4',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        alignSelf: 'flex-start',
        marginBottom: 10,
    }
});