import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  welcome: any;
  register: any;
  login: any;
  createAccountForm: any;
};

export type Props = NativeStackScreenProps<RootStackParamList>;
export type ProfileScreenNavigationProp = Props["navigation"];
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
