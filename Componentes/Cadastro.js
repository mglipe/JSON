import { TextInput, View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import {dados} from '../bancoDados/dados';
import * as Animatable from 'react-native-animatable';
import {useState} from 'react';
import {createUser} from '../services/res/users';

function Cadastro(props){

    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    async function create(){
        const result = await createUser(user,senha);
    

        if(result == 'sucess'){
            Alert.alert("user create with sucess");
            props.navigation.navigate('Home');
        }
    }

    return(
        <>
         <View style={styles.containerSubTitulo}>
            <Text
              style={styles.descricao}>
              {dados.descricao}
            </Text>
            <Text
              style={styles.complemento}>
              {dados.complemento}
            </Text>
          </View>
          <Animatable.Text 
            style={styles.cadastro}
            animation="fadeInLeft"
            >
            Cadastre-se Aqui!
            </Animatable.Text>
        <View style={styles.container}>
            <Text>User:</Text>
            <TextInput style={styles.input} value={user} onChangeText={setUser}/>
            <Text>Senha:</Text>
            <TextInput style={styles.input} value={senha} onChangeText={setSenha}/>
            <TouchableOpacity style={styles.button} onPress={create}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: '20%'
    },
    input:{
        backgroundColor: 'gray',
        margin: 10,
        width: 300,
        borderRadius: 5
    },
    button:{
        padding: 30,
        color: 'aliceblue',
        backgroundColor: '#3bb2d0',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        paddingVertical: 10,
        alignItems: 'center',
        fontSize: 18,
        borderRadius: 10,
    },
    welcome:{
        fontSize: 40
    },
    descricao: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'green',
    },
    complemento: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'red',
    },
    containerSubTitulo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '40%'
    },
    cadastro:{
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    }
})

export default Cadastro;