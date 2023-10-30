import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Home from "../screens/Home";
import TabRoutes from "./tab.navigation";

export default function StackRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="welcome" screenOptions={{
      headerTitle: " ",
      headerStyle: { backgroundColor: "#0d0d0d" },
      headerTintColor: "white",
    }}>
      <Stack.Screen
        name="welcome"
        options={{ headerShown: false }}
        component={Welcome}
      />
      <Stack.Screen
        name="register"
        component={Register}
      />
      <Stack.Screen
        name="login"
        component={Login}
      />
      <Stack.Screen
        name="tabRoutes"
        component={TabRoutes}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
