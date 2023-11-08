import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { persist } from "zustand/middleware";

export type PersistType = typeof persist;
export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IAccount {
  balance: string;
  account_number: number;
}

export type RootStackParamList = {
  welcome: any;
  register: any;
  login: any;
  createAccountForm: any;
  tabRoutes: any;
  sendMoney: any;
  profileSettings: any;
  addMoney: any;
};

export type Props = NativeStackScreenProps<RootStackParamList>;
export type ProfileScreenNavigationProp = Props["navigation"];
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type AuthStore = {
  user: IUser;
  setUser: (user: IUser) => void;
  access: string;
  refresh: string;
  setAccess: (access: string) => void;
  setRefresh: (refresh: string) => void;
  cleanToken: () => void;
};

export type UserStore = {
  account: IAccount;
  setAccount: (account: IAccount) => void;
};
