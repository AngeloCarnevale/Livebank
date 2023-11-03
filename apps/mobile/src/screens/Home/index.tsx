import { View, Text, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../stores/authStore";
import { styles } from "./styles";
import { MaterialIcons, AntDesign, Feather, Entypo } from "@expo/vector-icons";
import axios from "axios";
import { API_URL } from "@env";
import { IAccount } from "../../types";

const Home = () => {
  const [account, setAccount] = useState<IAccount>();
  const access = useAuthStore((state) => state.access);
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const hour = new Date().getHours();
  const [show, setShow] = useState(false);
  String(API_URL);

  const config = {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  };
  const bodyParameters = {
    key: "value",
  };

  const setUserInfos = async () => {
    const user = await axios
      .post(API_URL + "/auth/get/", bodyParameters, config)
      .then((data) => setUser(data.data));
  };
  const getCurrentAccount = async () => {
    const account = await axios
      .get(API_URL + `/account/${user.id}`, config)
      .then((data) => setAccount(data.data));
  };
  useEffect(() => {
    setUserInfos();
    getCurrentAccount();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userName}>{user.name}</Text>
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
        <View>
          <View style={styles.button}>
            <MaterialIcons
              name="attach-money"
              size={30}
              color="white"
              style={styles.iconButton}
            />
            <Text style={styles.buttonText}>Fund transfer</Text>
          </View>
        </View>

        <View style={styles.button}>
          <AntDesign
            name="plus"
            size={30}
            color="white"
            style={styles.iconButton}
          />
          <Text style={styles.buttonText}>Add money</Text>
        </View>

        <View style={styles.button}>
          <Feather
            name="more-horizontal"
            size={30}
            color="white"
            style={styles.iconButton}
          />
          <Text style={styles.buttonText}>More</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
