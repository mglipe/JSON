import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Componentes/Home';
import Lista from '../Componentes/Lista';
import Tela from '../Componentes/Tela';
import Cadastro from '../Componentes/Cadastro';
import { Skeleton } from '../Componentes/Skeleton';
const Stack = createNativeStackNavigator();

function StackScreen(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Lista" component={Lista}/>
            <Stack.Screen name="tela" component={Tela}/>
            <Stack.Screen name="Cadastro" component={Cadastro}/>
        </Stack.Navigator>
    )
}


export default StackScreen;