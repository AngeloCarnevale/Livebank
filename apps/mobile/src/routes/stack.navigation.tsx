import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Register from "../screens/Register";
import Login from "../screens/Login";
import TabRoutes from "./tab.navigation";
import SendMoney from "../screens/SendMoney";
import ProfileSettings from "../screens/ProfileSettings";
import AddMoney from "../screens/AddMoney";
import Loan from "../screens/Loan";

export default function StackRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerTitle: " ",
        headerStyle: { backgroundColor: "#0d0d0d" },
        headerTintColor: "white",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="welcome"
        options={{ headerShown: false }}
        component={Welcome}
      />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="sendMoney" component={SendMoney} options={{
        headerTitle: 'Send Money',
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 13
        }
      }}/>
      <Stack.Screen 
      name="addMoney" 
      component={AddMoney} 
      options={{
        headerTitle: 'Add Money',
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 13
        }
      }}/>
      <Stack.Screen
        name="tabRoutes"
        component={TabRoutes} 
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profileSettings"
        component={ProfileSettings} 
        options={{
          headerTitle: 'Profile Settings',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 13
          }
        }}
      />
      <Stack.Screen
        name="loan"
        component={Loan} 
        options={{
          headerTitle: 'Loan',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 13
          }
        }}
      />
    </Stack.Navigator>
  );
}
