import Home from "../screens/Home";
import Card from "../screens/Card";
import Transiction from "../screens/Transiction";
import Profile from "../screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function TabRoutes() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#0d0d0d",
        },
        tabBarStyle: {
          backgroundColor: "#181816",
          borderTopWidth: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          color: "white",
          fontWeight: "bold",
        },
        tabBarIconStyle: {
          color: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: () => <Feather name="home" size={25} color="white" />,
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="card"
        component={Card}
        options={{
          tabBarIcon: () => (
            <AntDesign name="creditcard" size={25} color="white" />
          ),
          tabBarLabel: "Card",
        }}
      />
      <Tab.Screen
        name="transiction"
        component={Transiction}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="bank-transfer"
              size={25}
              color="white"
            />
          ),
          tabBarLabel: "Transiction",
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Feather name="user" size={25} color="white" />,
          tabBarLabel: "Profile",
          headerStyle: {
            height: 50,
            backgroundColor: "#0d0d0d",
          },
        }}
      />
    </Tab.Navigator>
  );
}
