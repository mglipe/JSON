import{View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {dados} from '../bancoDados/dados';
import {useState} from 'react';
import { login } from '../services/res/users';

function Home(props){
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const [auth, setAuth] = useState('');


    async function entrarPressed(){
      const selectedUser = await login(user, senha);
      if(selectedUser){
        props.navigation.navigate('Lista', {selectedUser});
      }else{
        Alert.alert('invalid');
      }
    }
  
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.logo}>
          <Animatable.Image
            source={dados.imagem}
            style={styles.image}
            animation="flipInY"
            delay={1400}
          />
          <View style={styles.containerSubTitulo}>
            <Animatable.Text
              style={styles.descricao}
              animation="fadeInLeft"
              delay={600}>
              {dados.descricao}
            </Animatable.Text>
            <Animatable.Text
              style={styles.complemento}
              animation="fadeInRight"
              delay={1000}>
              {dados.complemento}
            </Animatable.Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#38a69d',
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
            marginTop: 40,
          }}>
          <View style={styles.container}>
            <View style={styles.containerInput}>
              <Image source={dados.iconUser} style={styles.icon} />
              <TextInput
                placeholder="Login"
                onChangeText={(retorno) => {
                  setUser(retorno);
                }}
                style={styles.input}
              />
            </View>
            <View style={styles.containerInput}>
              <Image source={dados.iconKey} style={styles.icon} />
              <TextInput
                placeholder="Senha"
                onChangeText={(retorno) => {
                  setSenha(retorno);
                }}
                style={styles.input}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={entrarPressed}>
            <Text>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.containerCreateAccount}>
            <Text>{dados.createUser}</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Cadastro')}>
              <Text style={styles.link}>Criar Usuário</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        marginTop: 60,
      },
      image: {
        width: 100,
        height: 100,
      },
      containerSubTitulo: {
        flexDirection: 'row',
      },
      descricao: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
      },
      complemento: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red',
      },
      containerInput: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
      },
      container: {
        alignItems: 'center',
        marginTop: 50,
      },
      input: {
        borderBottomWidth: 1,
      },
      icons: {
        width: 30,
        height: 30,
      },
      containerCreateAccount: {
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 5,
      },
      button: {
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
      link: {
        color: '#c63b3b',
        marginLeft: 2,
        fontWeight: 'bold',
      },
      icon: {
        width: 30,
        height: 30,
      },
})


export default Home;