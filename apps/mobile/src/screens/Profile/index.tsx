import { View, Text } from "react-native";
import { styles } from "./styles";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import ProfileOption from "../../components/ProfileOption";
import { useAuthStore } from "../../stores/authStore";
import { NavigationProp } from "../../types";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const access = useAuthStore((state) => state.access);
  const user = useAuthStore((state) => state.user)
  const navigation = useNavigation<NavigationProp>();
  const signOut = () => {
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <FontAwesome name="user-circle" size={70} color="#c0c0c0" />
        <View style={styles.textContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <ProfileOption
          icon={
            <FontAwesome5
              name="user"
              size={30}
              color="black"
              style={{
                backgroundColor: "#FCE38A",
                padding: 10,
                borderRadius: 15,
              }}
            />
          }
          text="Profile Settings"
          onPress={()=> navigation.navigate("profileSettings")}
        />

        <ProfileOption
          icon={
            <Ionicons
              name="ios-settings-outline"
              size={30}
              color="black"
              style={{
                backgroundColor: "#FCE38A",
                padding: 10,
                borderRadius: 15,
              }}
            />
          }
          text="Settings"
          onPress={signOut}
        />

        <ProfileOption
          icon={
            <FontAwesome5
              name="headset"
              size={30}
              color="black"
              style={{
                backgroundColor: "#FCE38A",
                padding: 10,
                borderRadius: 15,
              }}
            />
          }
          text="Support"
          onPress={signOut}
        />

        <ProfileOption
          icon={
            <Ionicons
              name="exit-outline"
              size={30}
              color="black"
              style={{
                backgroundColor: "#FCE38A",
                padding: 10,
                borderRadius: 15,
              }}
            />
          }
          text="Sign out"
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </View>
  );
};

export default Profile;
