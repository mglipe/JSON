import {View, Text, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Modal, Pressable, Button} from 'react-native'
import { icons } from '../bancoDados/dados';
import { useState } from 'react';
import CountDown from 'react-native-countdown-component';
import { Skeleton } from './Skeleton';
const width = Dimensions.get('screen').width;

function Tela(props){   
    const[amountDescription, setAmountDescription] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const [finish, setFinish] = useState("");
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState(props.route.params.item);


    const amountLess = () => {
        if (amountDescription > 1) {
          setAmountDescription(amountDescription - 1);
        }
      };
    
      const amountMore = () => {
        setAmountDescription(amountDescription + 1);
      };
    
    return(
      <Skeleton visible={loading}>
        <ScrollView>
            <View>
                <ScrollView horizontal={true}>
                    <Image style={styles.imageDetails} source={{uri:item.img}}/>
                    <Image style={styles.imageDetails} source={{uri:item.imgDetails}}/>
                </ScrollView>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.descricao}> {item.descricao}</Text>
                <Text style={styles.valor}>{item.valor}</Text>
            </View>
            <ScrollView style={styles.containerIcons} horizontal={true}>
                <View style={styles.containerDescriptionsIcons}>
                    <Image style={styles.icons} source={icons.time} />
                    <Text>{icons.timeDescription}</Text>
                </View>
                <View style={styles.containerDescriptionsIcons}>
                    <Image style={styles.icons} source={icons.group} />
                    <Text>{icons.groupDescription}</Text>
                </View>
                <View style={styles.containerDescriptionsIcons}>
                    <View>
                    <TouchableOpacity onPress={amountMore}>
                        <Image style={{ width: 20, height: 20 }} source={icons.more} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={amountLess}>
                        <Image style={{ width: 20, height: 20 }} source={icons.less} />
                    </TouchableOpacity>
                    </View>
                    <Text>
                    {amountDescription}
                    <Text>Qtd</Text>
                    </Text>
                </View>
            </ScrollView>
            <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => setModalVisible(true)}>
            <Text>Pedir</Text>
            </TouchableOpacity>
            <Modal 
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={()=>{setModalVisible(!modalVisible)}}
            >
                <View style={styles.containerModal}>
                    <Pressable
                        style={styles.close}
                        onPress={() => {
                        setModalVisible(!modalVisible);}}>
                        <Text>Close</Text>
                    </Pressable>
                    <View style={{ alignItems: 'center' }}>
                        <Text>tempo de preparo</Text>
                        <CountDown
                            until={5}
                            timeToShow={['H', 'M', 'S']}
                            timeLabels={{
                                h: 'Horas',
                                m: 'Minutos',
                                s: 'Segundos',
                            }}
                            onFinish={() => setFinish("pedido saiu para entrega")}
                            size={15}
                        />
                    </View>
                    <Text style={{alignItems: 'center'}}>{finish}</Text>
                </View>
            </Modal>
        </ScrollView>
      </Skeleton>
    );
}

const styles = StyleSheet.create({
    imageDetails: {
        width:  width,
        height: 200,
      },
      titulo:{
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
        margin: 10,
      },
      descricao:{
        fontSize: 14,
        margin: 10,
        textAlign: 'justify',
      }, 
      valor:{
        fontSize: 18,
        color: 'gray',
        margin: 10
      },
      containerDescriptionsIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 80,
      },
      icons: {
        width: 30,
        height: 30,
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
      containerModal: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 240,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
})


export default Tela;