import { useFetchProfile } from "@/entities/user/model/useFetchProfile";
interface Personal {
  id: number;
  key: string;
  value: string;
  dataset: string;
}

interface Contacts {
  id: number;
  key: string;
  value: string;
  dataset: string;
}

interface birthday {
  id: number;
  day: string;
  year: string;
  month: string;
}

interface languages {
  id: string;
  language: string;
}

export interface Friend {
  id: number;
  name: string;
  userpic: string;
  isOnline: boolean;
}

export interface user {
  id: number;
  firstname: string;
  lastname: string;
  bio: string;
  avatar: string;
  birthday: birthday;
  city: string;
  workplace: string;
  languages: languages[];
  contacts: Contacts[];
  personal: Personal[];
}
export const useUserProfileData = () => {
  const { profile } = useFetchProfile();
  return profile
}
 


export const useSelectID = () => useUserProfileData()?.id;
export const useSelectFirstname = () => useUserProfileData()?.firstname;
export const useSelectLastname = () => useUserProfileData()?.lastname;
export const useSelectBio = () => useUserProfileData()?.bio;
export const useSelectAvatar = () => useUserProfileData()?.avatar;
export const useBirthDay = () => useUserProfileData()?.birthday.day;
export const useBirthMonth = () => useUserProfileData()?.birthday.month;
export const useBirthYear = () => useUserProfileData()?.birthday.year;
export const useSelectCity = () => useUserProfileData()?.city;
export const useSelectWorkplace = () => useUserProfileData()?.workplace;
export const useSelectLanguages = () => useUserProfileData()?.languages;
export const useSelectContacts = () => useUserProfileData()?.contacts;
export const useSelectPersonal = () => useUserProfileData()?.personal;
