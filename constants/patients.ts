const patients = [
  {
    id: "1",
    name: "John Doe",
    age: 45,
    gender: "Male",
    bloodType: "A+",
    height: "5'10\"",
    weight: "180 lbs",
    bmi: 25.8,
    chronicConditions: ["Hypertension", "Type 2 Diabetes"],
    medications: ["Lisinopril", "Metformin"],
    allergies: ["Penicillin"],
    avatar: "https://i.pravatar.cc/150?img=1",
    recentAppointments: [
      { date: "2023-05-15", doctor: "Dr. Smith", reason: "Annual Checkup" },
      {
        date: "2023-03-02",
        doctor: "Dr. Johnson",
        reason: "Diabetes Follow-up",
      },
    ],
    vitalSigns: {
      bloodPressure: [
        { date: "2023-05-15", value: "120/80" },
        { date: "2023-03-02", value: "130/85" },
        { date: "2022-12-10", value: "125/82" },
      ],
      heartRate: [
        { date: "2023-05-15", value: 72 },
        { date: "2023-03-02", value: 75 },
        { date: "2022-12-10", value: 70 },
      ],
    },
    labResults: [
      {
        test: "HbA1c",
        value: "6.8%",
        date: "2023-05-15",
        normalRange: "4.0-5.6%",
      },
      {
        test: "Cholesterol",
        value: "185 mg/dL",
        date: "2023-05-15",
        normalRange: "<200 mg/dL",
      },
      {
        test: "HDL",
        value: "55 mg/dL",
        date: "2023-05-15",
        normalRange: ">40 mg/dL",
      },
      {
        test: "LDL",
        value: "110 mg/dL",
        date: "2023-05-15",
        normalRange: "<100 mg/dL",
      },
    ],
  },
  {
    id: "2",
    name: "Jane Smith",
    age: 34,
    gender: "Female",
    bloodType: "O-",
    height: "5'6\"",
    weight: "140 lbs",
    bmi: 22.6,
    chronicConditions: ["Asthma"],
    medications: ["Albuterol"],
    allergies: ["Peanuts"],
    avatar: "https://i.pravatar.cc/150?img=2",
    recentAppointments: [
      { date: "2023-06-01", doctor: "Dr. Adams", reason: "Asthma Follow-up" },
      { date: "2023-04-10", doctor: "Dr. Carter", reason: "Allergy Testing" },
    ],
    vitalSigns: {
      bloodPressure: [
        { date: "2023-06-01", value: "118/76" },
        { date: "2023-04-10", value: "115/72" },
      ],
      heartRate: [
        { date: "2023-06-01", value: 68 },
        { date: "2023-04-10", value: 70 },
      ],
    },
    labResults: [
      {
        test: "Cholesterol",
        value: "170 mg/dL",
        date: "2023-06-01",
        normalRange: "<200 mg/dL",
      },
      {
        test: "Vitamin D",
        value: "35 ng/mL",
        date: "2023-06-01",
        normalRange: "30-100 ng/mL",
      },
    ],
  },
  {
    id: "3",
    name: "Bob Johnson",
    age: 50,
    gender: "Male",
    bloodType: "B+",
    height: "6'0\"",
    weight: "200 lbs",
    bmi: 27.1,
    chronicConditions: ["Arthritis"],
    medications: ["Ibuprofen"],
    allergies: ["None"],
    avatar: "https://i.pravatar.cc/150?img=3",
    recentAppointments: [
      { date: "2023-05-20", doctor: "Dr. Green", reason: "Joint Pain" },
      { date: "2023-03-15", doctor: "Dr. White", reason: "Follow-up" },
    ],
    vitalSigns: {
      bloodPressure: [
        { date: "2023-05-20", value: "125/80" },
        { date: "2023-03-15", value: "130/85" },
      ],
      heartRate: [
        { date: "2023-05-20", value: 75 },
        { date: "2023-03-15", value: 78 },
      ],
    },
    labResults: [
      {
        test: "CRP",
        value: "5.2 mg/L",
        date: "2023-05-20",
        normalRange: "<3.0 mg/L",
      },
    ],
  },
  {
    id: "4",
    name: "Alice Brown",
    age: 28,
    gender: "Female",
    bloodType: "AB+",
    height: "5'4\"",
    weight: "120 lbs",
    bmi: 20.6,
    chronicConditions: ["None"],
    medications: ["None"],
    allergies: ["None"],
    avatar: "https://i.pravatar.cc/150?img=4",
    recentAppointments: [
      { date: "2023-07-15", doctor: "Dr. Hill", reason: "General Checkup" },
    ],
    vitalSigns: {
      bloodPressure: [{ date: "2023-07-15", value: "110/70" }],
      heartRate: [{ date: "2023-07-15", value: 65 }],
    },
    labResults: [
      {
        test: "Complete Blood Count",
        value: "Normal",
        date: "2023-07-15",
        normalRange: "Normal",
      },
    ],
  },
  {
    id: "5",
    name: "Charlie Wilson",
    age: 60,
    gender: "Male",
    bloodType: "O+",
    height: "5'9\"",
    weight: "190 lbs",
    bmi: 28.1,
    chronicConditions: ["High Cholesterol"],
    medications: ["Atorvastatin"],
    allergies: ["Shellfish"],
    avatar: "https://i.pravatar.cc/150?img=5",
    recentAppointments: [
      { date: "2023-06-12", doctor: "Dr. Lee", reason: "Cholesterol Check-up" },
    ],
    vitalSigns: {
      bloodPressure: [{ date: "2023-06-12", value: "135/85" }],
      heartRate: [{ date: "2023-06-12", value: 72 }],
    },
    labResults: [
      {
        test: "Cholesterol",
        value: "210 mg/dL",
        date: "2023-06-12",
        normalRange: "<200 mg/dL",
      },
    ],
  },
];

export default patients;
