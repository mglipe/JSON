import {View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { getList } from '../services/res/lista';
import { useState, useEffect } from 'react';

const screenWidth = Dimensions.get('screen').width;


function Lista(props){
    const [itemList, setItemList] = useState([]);
    const[user, setUser] = useState(props.route.params.selectedUser);

    async function listProduct(){
        const list = await getList();
        setItemList(list);
    }

    useEffect(listProduct,[])    
   

    function Item({item}){
        
        return(
            <TouchableOpacity style={[styles.containeTouch, styles.lista]} onPress={()=>props.navigation.navigate("tela", {item})}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <View style={styles.containerProduto}>
                    <Text style={styles.descricaoLista}>{item.descricao}</Text>
                    <Image style={styles.img} source={{uri:item.img}}/>
                </View>
                <Text style={styles.valor}>{item.valor}</Text>
            </TouchableOpacity>
        )
    }



    return (
        <>
            <View style={styles.containerUser}>
                <View style={styles.backProfile}>
                    <Image source={{uri:user.avatar_url}} style={styles.profile}/>
                </View>
                <Text style={{marginTop: 10, fontSize: 16}}>{user.email}</Text>
                
            </View>
            <FlatList data={itemList} renderItem={Item}/>
        </>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 15,
        marginLeft: 5,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 15,
        marginBottom: 5,
    },
    descricaoLista: {
        textAlign: 'justify',
        marginRight: 10,
        marginLeft: 5,
    },
    img: {
        width: 100,
        height: 100,
        marginRight: 5,
    },
    valor: {
        fontSize: 15,
        color: 'gray',
        marginLeft: 5,
    },
    containeTouch: {
        borderBottomWidth: 1,
    },
    lista: {
        backgroundColor: '#fff',
    },
    containerProduto: {
        width: screenWidth - 85,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerUser:{
        alignItems: 'center',
        marginTop: 40,
    },
    profile:{
        width: 100,
        height: 100,
        borderRadius: 65
    },
    backProfile:{
        backgroundColor: '#fff',
        width: '30%',
        alignItems: 'center',
        borderRadius: 50,
    }
})


export default Lista;