import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  welcome: any;
  register: any;
  login: any;
  createAccountForm: any;
};

export type Props = NativeStackScreenProps<RootStackParamList>;
export type ProfileScreenNavigationProp = Props["navigation"];

