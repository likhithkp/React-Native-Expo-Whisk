import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown : false}}>
                <Stack.Screen name="SplashScreen" component={SplashScreen}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}