import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Register from "../screens/Register";

export default function StackRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen
        name="welcome"
        options={{ headerShown: false }}
        component={Welcome}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          headerTitle: " ",
          headerStyle: { backgroundColor: "#0d0d0d" },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}