interface Appointment {
  date: string;
  doctor: string;
  reason: string;
}

interface BloodPressure {
  date: string;
  value: string;
}

interface HeartRate {
  date: string;
  value: number;
}

export interface LabResult {
  test: string;
  value: string;
  date: string;
  normalRange: string;
}

interface PatientData {
  id: string;
  name: string;
  age: number;
  avatar: string;
  gender: string;
  bloodType: string;
  height: string;
  weight: string;
  bmi: number;
  chronicConditions: string[];
  medications: string[];
  allergies: string[];
  recentAppointments: Appointment[];
  vitalSigns: {
    bloodPressure: BloodPressure[];
    heartRate: HeartRate[];
  };
  labResults: LabResult[];
}

export default PatientData;
