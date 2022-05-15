import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../../screens/Cart';

const CartStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Carrito"
                component={Cart}
                options={{
                    title: "Cart",
                    headerStyle: {
                        backgroundColor: '#FAE48BFF',
                      },
                      headerTintColor: '#666',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                }}
            />
        </Stack.Navigator>
    )
}

export default CartStack