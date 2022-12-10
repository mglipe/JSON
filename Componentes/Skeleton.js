import {View, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Animated} from 'react-native';
import { useEffect } from 'react';

const width = Dimensions.get('screen').width;

const AnimatadeValue = new Animated.Value(0)

const circleAnimated = ()=>{
    AnimatadeValue.setValue(0)
    Animated.timing(
        AnimatadeValue,
        {
            toValue: 1,
            duration: 350,
            useNativeDriver: false
        }
    ).start(()=>{
        setTimeout(()=>{
            circleAnimated()
        }, 1000)
    })
}

const translateX = AnimatadeValue.interpolate({
    inputRange: [0,1],
    outputRange: [0, 410],
})

const translateX2 = AnimatadeValue.interpolate({
    inputRange: [0,1],
    outputRange: [0, 140],
})

const translateX3 = AnimatadeValue.interpolate({
    inputRange: [0,1],
    outputRange: [0, 390],
})



export function Skeleton({visible, children}){

    useEffect(()=>{
        circleAnimated();

        return ()=> circleAnimated();
    },[])

 if (visible){
    return(
        <View>
                <View horizontal={true} style={styles.imageDetails}>
                    <Animated.View
                    style={styles.animation}
                    />
                </View>
                <View style={styles.titulo}>
                    <Animated.View style={styles.animationX2}/>
                </View>
                <View style={styles.descricao}>
                  <Animated.View style={styles.animationX3}/>
                </View>
                <View style={styles.valor}></View>
                <ScrollView style={styles.containerIcons} horizontal={true}>
                    <View style={styles.containerDescriptionsIcons}>
                        
                        <View style={styles.icons}>
                        <Animated.View
                    style={styles.animation}
                    />
                        </View>
                    </View>
                    <View style={styles.containerDescriptionsIcons}>
                        
                        <View style={styles.icons}>
                        <Animated.View
                    style={styles.animation}
                    />
                        </View>
                    </View>
                    <View style={styles.containerDescriptionsIcons}>
                        <View>
                        <TouchableOpacity>
                            
                        </TouchableOpacity>
                        <TouchableOpacity>
                            
                        </TouchableOpacity>
                        </View>
                        <View style={styles.icons}>
                        <Animated.View
                    style={styles.animation}
                    />
                        </View>
                    </View>
                </ScrollView>
        </View>
    );
  }
  return (
    <>
      {children}
    </>
  )
}


const styles = StyleSheet.create({
    imageDetails: {
        width:  width,
        height: 200,
        backgroundColor: '#ECEFF1',
        overflow: 'hidden'
      },
      titulo:{
        width: width - 280,
        height: 25,
        margin: 10,
        backgroundColor: '#ECEFF1',
        overflow: 'hidden'
      },
      descricao:{
        width: width - 20,
        height: 70,
        margin: 10,
        backgroundColor: '#ECEFF1'
      }, 
      valor:{
        width: 70,
        backgroundColor: '#ECEFF1',
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
        backgroundColor:'#ECEFF1',
        borderRadius: 15
      },
      button: {
        padding: 30,
        color: 'aliceblue',
        backgroundColor: '#ECEFF1',
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
      animation:{
        width: '2%',
        height: '100%',
        opacity: .5,
        backgroundColor: '#fff',
        transform:[{translateX: translateX}]
      },
      animationX2:{
        width: '2%',
        height: '100%',
        opacity: .5,
        backgroundColor: '#fff',
        transform:[{translateX: translateX2}],
       
        
      },
      animationX3:{
        width: '2%',
        height: '100%',
        opacity: .5,
        backgroundColor: '#fff',
        transform:[{translateX: translateX3}],
       
        
      }
})