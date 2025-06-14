import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../auth/LoginScreen";
import RegistroScreen from "../auth/RegistroScreen";
import PeliculasScreen from "../screens/PeliculasScreen";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Registro" component={RegistroScreen} />
            <Stack.Screen name="Peliculas" component={PeliculasScreen}/>
        </Stack.Navigator>
    )
}

export default function NavegadorPrincipal(){
    return(
        <NavigationContainer>
           <MyStack/> 
        </NavigationContainer>
    )
}

