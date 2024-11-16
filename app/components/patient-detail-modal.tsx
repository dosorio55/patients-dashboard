import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PatientData from "../types/user";
import { Link, router } from "expo-router";
import { useContext } from "react";
import { UsersContext } from "../context/user-context";

interface UserDetailModalProps {
  patient: PatientData | undefined;
}

const UserDetailModal: React.FC<UserDetailModalProps> = ({ patient }) => {
  const contextData = useContext(UsersContext);

  const goToPage = () => {
    contextData.handleSetModal(false);
    router.push("/patient-profile");
  };

  const onClose = () => {
    contextData.handleSetModal(false);
  };

  return (
    <Modal
      visible={contextData.modalIsOpen}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={{ uri: patient?.avatar }} style={styles.modalAvatar} />
          <Text style={styles.modalName}>{patient?.name}</Text>
          <Text style={styles.modalRole}>{patient?.age}</Text>
          <Text style={styles.modalEmail}>{patient?.gender}</Text>
          <View>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={goToPage}>
              <Text style={styles.closeButtonText}>View details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UserDetailModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  modalName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  modalRole: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  modalEmail: {
    fontSize: 16,
    color: "#333",
    marginBottom: 24,
  },
  closeButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
