import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Categories from "../../screens/Categories";
import Detail from "../../screens/Detail";
import Products from "../../screens/Products";

const ShopStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Categories"
            
            
        >
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{ title: "Categories", 
                headerStyle: {
                    backgroundColor: '#FAE48BFF',
                  },
                  headerTintColor: '#666',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
             }}
            />
            <Stack.Screen
                name="Products"
                component={Products}
                options={({ route }) => ({ title: route.params.category, headerStyle: {
                    backgroundColor: '#FAE48BFF',
                  },
                  headerTintColor: '#666',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  }, }) } />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={({ route }) => ({ title: route.params.title, headerStyle: {
                    backgroundColor: '#FAE48BFF',
                  },
                  headerTintColor: '#666',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  }, })} />
        </Stack.Navigator>
    )
}

export default ShopStack;