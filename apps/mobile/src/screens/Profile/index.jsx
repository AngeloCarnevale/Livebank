import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import ProfileOption from "../../components/ProfileOption";
import { useAuthStore } from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from "react";
import { api } from "../../services/axios";
import { BASE_URL } from "../../services/axios";

const Profile = () => {
  const user = useAuthStore((state) => state.user)
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState("")
  const signOut = () => {

  };

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (result.assets != null) {
      setSelectedImage(result.assets[0].uri)
    }
  };
  console.log(selectedImage)

  const handleUpdatePic = async () => {
    const formData = new FormData();
    formData.append("image", {
      uri: selectedImage,
      name: "photo.jpg",
      type: "image/jpg",
    });
    await api
      .patch(`/auth/${user.id}/`, formData)
      .then((response) => {
        console.log("Image uploaded successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error uploading image:", error.toJSON());
      });
  };

  useEffect(() => {
    if (selectedImage) {
      handleUpdatePic()
    }
  }, [selectedImage])

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>

        {!user.image && (
          <Pressable onPress={pickImage}>
            <FontAwesome5 name="user-circle" size={70} color="#c0c0c0" />
          </Pressable>
        )}
        {user.image && (
          <Pressable onPress={pickImage}>
            <Image source={{ uri: `${BASE_URL}/media/${user.image}` }} alt="Profile image" width={100} height={100} />
          </Pressable>
        )}
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
          onPress={() => navigation.navigate("profileSettings")}
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
