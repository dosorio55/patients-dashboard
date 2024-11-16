import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import PatientData from "../types/user";
import UserDetailModal from "../components/patient-detail-modal";
import PatientCard from "../components/patient-card";
import { UsersContext } from "../context/user-context";

const Dashboard = () => {
  const contextData = useContext(UsersContext);
  const patients = contextData.patients;

  const handleUserPress = (user: PatientData) => {
    contextData.handleSelectedUser(user.id);
    contextData.handleSetModal(true);
  };

  const selectedPatient = patients.find((patient) => {
    return patient.id === contextData.selectedUser;
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>User Dashboard</Text>
      <FlatList
        data={patients}
        renderItem={({ item }) => (
          <PatientCard patient={item} onPress={() => handleUserPress(item)} />
        )}
        keyExtractor={(item) => item.id}
        // numColumns={3}
        contentContainerStyle={styles.listContainer}
        style={{ display: "flex", gap: "16px", padding: 10 }}
      />
      <UserDetailModal patient={selectedPatient} />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
});
