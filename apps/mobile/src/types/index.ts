import type { NativeStackScreenProps } from '@react-navigation/native-stack';


type RootStackParamList = {
    welcome: undefined;
    register: undefined;
    login: undefined;
    createAccountForm: undefined;
  };

export type Props = NativeStackScreenProps<RootStackParamList>;
export type ProfileScreenNavigationProp = Props['navigation'];
