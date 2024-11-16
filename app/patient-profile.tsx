import React, { useContext } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { UsersContext } from "./context/user-context";

const screenWidth = Dimensions.get("window").width;

const PatientProfilePage = () => {
  const dataContext = useContext(UsersContext);

  console.log(dataContext);

  const patientData = dataContext.patients.find((patient) => {
    return patient.id === dataContext.selectedUser;
  });

  if (patientData === undefined) {
    return <Text>No patient selected</Text>;
  }

  const bloodPressureData = {
    labels: patientData.vitalSigns.bloodPressure.map((bp) => bp.date),
    datasets: [
      {
        data: patientData.vitalSigns.bloodPressure.map((bp) =>
          parseInt(bp.value.split("/")[0])
        ),
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: patientData.vitalSigns.bloodPressure.map((bp) =>
          parseInt(bp.value.split("/")[1])
        ),
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Systolic", "Diastolic"],
  };

  const heartRateData = {
    labels: patientData.vitalSigns.heartRate.map((hr) => hr.date),
    datasets: [
      {
        data: patientData.vitalSigns.heartRate.map((hr) => hr.value),
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Heart Rate"],
  };

  const bmiData = {
    labels: ["Underweight", "Normal", "Overweight", "Obese"],
    datasets: [
      {
        data: [18.5, 24.9, 29.9, 40],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: patientData.avatar }} style={styles.avatar} />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{patientData.name}</Text>
          <Text style={styles.subInfo}>
            {patientData.age} years old, {patientData.gender}
          </Text>
          <Text style={styles.subInfo}>
            Blood Type: {patientData.bloodType}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Physical Information</Text>
        <Text>Height: {patientData.height}</Text>
        <Text>Weight: {patientData.weight}</Text>
        <Text>BMI: {patientData.bmi}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Chronic Conditions</Text>
        {patientData.chronicConditions.map((condition, index) => (
          <Text key={index}>{condition}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Medications</Text>
        {patientData.medications.map((medication, index) => (
          <Text key={index}>{medication}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Allergies</Text>
        {patientData.allergies.map((allergy, index) => (
          <Text key={index}>{allergy}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Appointments</Text>
        {patientData.recentAppointments.map((appointment, index) => (
          <View key={index} style={styles.appointment}>
            <Text>{appointment.date}</Text>
            <Text>{appointment.doctor}</Text>
            <Text>{appointment.reason}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vital Signs</Text>
        <Text style={styles.chartTitle}>Blood Pressure</Text>
        <LineChart
          data={bloodPressureData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />

        <Text style={styles.chartTitle}>Heart Rate</Text>
        <LineChart
          data={heartRateData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>BMI Chart</Text>
        <BarChart
          data={bmiData}
          width={screenWidth - 40}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          yAxisSuffix="sufixX"
          style={styles.chart}
        />
        <Text style={styles.bmiIndicator}>
          Patient's BMI: {patientData.bmi}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lab Results</Text>
        {patientData.labResults.map((result, index) => (
          <View key={index} style={styles.labResult}>
            <Text style={styles.labTestName}>{result.test}</Text>
            <Text>Value: {result.value}</Text>
            <Text>Date: {result.date}</Text>
            <Text>Normal Range: {result.normalRange}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  headerInfo: {
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subInfo: {
    fontSize: 16,
    color: "#666666",
  },
  section: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  appointment: {
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  bmiIndicator: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  labResult: {
    marginBottom: 15,
  },
  labTestName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PatientProfilePage;
