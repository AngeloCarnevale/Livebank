import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuthStore } from "../../stores/authStore";
import { styles } from "./styles";
import { MaterialIcons, AntDesign, Feather, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { IAccount, NavigationProp } from "../../types";
import { api } from "../../services/axios";

const Home = () => {
  
  const [account, setAccount] = useState<IAccount>();
  const access = useAuthStore((state) => state.access);
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const hour = new Date().getHours();
  const [show, setShow] = useState(true);
  const navigation = useNavigation<NavigationProp>()
  
  api.defaults.headers['Authorization'] = `Bearer ${access}`

  const setUserInfos = async () => {
    const user = await api.get("/auth/")
      .then((data) => {
        setUser(data.data)
      });
  };
  const getCurrentAccount = async () => {
    const account = await api
      .get(`/account/`)
      .then((data) => setAccount(data.data));
  };
  useEffect(() => {
    setUserInfos();
    getCurrentAccount();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userName}>
          Hello, {" "}
          {
            String(user.name.split(" ", user.name.length)[0])
          }</Text>
        <Text style={styles.salutationMsg}>
          {hour <= 12
            ? "Good morning"
            : hour <= 18
              ? "Good afternoon"
              : "Goog night"}
        </Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.labelBalance}>Total balance</Text>
        <View style={styles.balanceAndEye}>
          <TextInput
            style={styles.balanceValue}
            secureTextEntry={show}
            editable={false}
          >
            R$ {account?.balance}
          </TextInput>
          <Entypo
            onPress={() => setShow(!show)}
            name="eye-with-line"
            size={24}
            style={{
              color: "#c0c0c0",
            }}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("sendMoney")}>
          <View style={styles.button}>
            <MaterialIcons
              name="attach-money"
              size={30}
              color="white"
              style={styles.iconButton}
            />
            <Text style={styles.buttonText}>Fund transfer</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("addMoney")}
        >
          <AntDesign
            name="plus"
            size={30}
            color="white"
            style={styles.iconButton}
          />
          <Text style={styles.buttonText}>Add money</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate("loan")}
        >
          <FontAwesome5
            name="money-check"
            size={30}
            color="lightgray"
            style={styles.iconButton}
          />
          <Text style={styles.buttonText}>Loan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
