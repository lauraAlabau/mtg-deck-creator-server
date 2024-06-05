"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
} from "react";

interface UserContextType {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

export const UserContext = createContext<any>(null);

type UserProviderProps = {
  children: ReactNode;
};

// export const UserProvider: FC<UserProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<any>();

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUserContext = () => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUserContext must be used within a UserProvider");
//   }
//   return context;
// };
