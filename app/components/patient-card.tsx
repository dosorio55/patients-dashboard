import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PatientData from "../types/user";

interface Props {
  patient: PatientData;
  onPress: () => void;
}

const PatientCard: React.FC<Props> = ({ patient, onPress }) => (
  <>
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: patient.avatar }} style={styles.avatar} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{patient.name}</Text>
        <Text style={styles.role}>{patient.gender}</Text>
        <Text style={styles.role}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nam
          illum error reiciendis eius. Vitae nihil consectetur possimus. Esse
          quam quod nostrum quas totam asperiores, est consectetur rem possimus
          fuga.
        </Text>
      </View>
    </TouchableOpacity>
  </>
);

export default PatientCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    margin: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  role: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
