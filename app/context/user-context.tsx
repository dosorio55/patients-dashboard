import React, { useEffect, useState } from "react";
import PatientData from "../types/user";
import patients from "@/constants/patients";

interface Context {
  patients: PatientData[];
  selectedUser: string | null;
  handleSelectedUser: (userId: string | null) => void;
}

export const UsersContext = React.createContext<Context>({
  patients: patients,
  selectedUser: null,
  handleSelectedUser: () => {},
});

interface UserContextProps {
  children: React.ReactNode;
}

const UserContextComponent = (props: UserContextProps) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const handleSelectedUser = (userId: string | null) => {
    setSelectedUser(userId);
  };

  useEffect(() => {
    console.log("context is mounting");

    return () => {
      console.log("context is unmounting");
    };
  }, []);

  console.log("selectedUser", selectedUser);

  return (
    <UsersContext.Provider
      value={{
        patients: patients,
        selectedUser: selectedUser,
        handleSelectedUser: handleSelectedUser,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UserContextComponent;
