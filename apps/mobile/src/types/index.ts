import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import {persist} from 'zustand/middleware'


export type PersistType = typeof persist


export type RootStackParamList = {
  welcome: any;
  register: any;
  login: any;
  createAccountForm: any;
  tabRoutes: any
};

export type Props = NativeStackScreenProps<RootStackParamList>;
export type ProfileScreenNavigationProp = Props["navigation"];
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type AuthStore = {
  access: string
  refresh: string
  setAccess: (access: string) => void
  setRefresh: (refresh: string)=> void
  cleanToken: ()=> void
}
