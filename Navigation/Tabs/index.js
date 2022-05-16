import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from '../Stacks/Shop';
import CartStack from '../Stacks/Cart';
import OrderStack from '../Stacks/Orders';
import { Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return (
            <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#A6EEE6FF",
                tabBarInactiveTintColor: "#fff",
                tabBarStyle: {
                  height: 55,
                  backgroundColor:'#1B244C'
                },
                tabBarLabelStyle: {
                  fontSize: 14,
                  margin: 0,
                  
                },
              }}
            >
                <Tab.Screen name="Shop" component={ShopStack} 
                options={{
                    tabBarIcon: () => (<Image source={require("./../../assets/shop.png")} style={{width: 20, height: 20, display:'flex'}} />)
                }}/>
                <Tab.Screen name="Cart" component={CartStack}
                  options={{
                    tabBarIcon: () => (<Image source={require("./../../assets/cart.png")} style={{width: 20, height: 20, display:'flex'}} />)
                }}
                />
                <Tab.Screen name="Orders" component={OrderStack}
                 options={{
                    tabBarIcon: () => (<Image source={require("./../../assets/order.png")} style={{width: 20, height: 20, display:'flex'}} />)
                }}
                />
            </Tab.Navigator>
    );
}

export default TabNavigator