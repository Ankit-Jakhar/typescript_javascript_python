// ============================================
// F8 - LOOPS
// Project: VoiceDoc AI
// Run: bun typescript/F8_loops.ts
// ============================================

type TsPatient = {
    name: string;
    age: number;
    fee: number;
    isEmergency: boolean;
};

type TsDoctor = {
    id: string;
    name: string;
    specialization: string;
    fee: number;
    rating: number;
    available: boolean;
};

const tsDoctorProfile: TsDoctor = {
    id: "DOC001",
    name: "Dr. Priya Sharma",
    specialization: "Cardiology",
    fee: 800,
    rating: 4.8,
    available: true
};

const tsPatientQueue: TsPatient[] = [
    { name: "Ramesh Kumar",  age: 67, fee: 800,  isEmergency: true  },
    { name: "Suresh Sharma", age: 34, fee: 500,  isEmergency: false },
    { name: "Priya Patel",   age: 71, fee: 1200, isEmergency: true  },
    { name: "Mahesh Singh",  age: 28, fee: 600,  isEmergency: false },
    { name: "Kavita Mehta",  age: 55, fee: 800,  isEmergency: false }
];

// 1. for...of
console.log("--- for...of ---");
for (const tsPatient of tsPatientQueue) {
    console.log(`Patient: ${tsPatient.name} — Fee: ₹${tsPatient.fee}`);
}

// 2. for loop
console.log("\n--- for loop ---");
for (let i: number = 0; i < tsPatientQueue.length; i++) {
    const tsCurrentPatient: TsPatient = tsPatientQueue[i];
    console.log(`${i + 1}. ${tsCurrentPatient.name}`);
}

// 3. for...in
console.log("\n--- for...in ---");
for (const tsKey in tsDoctorProfile) {
    console.log(`${tsKey}: ${tsDoctorProfile[tsKey as keyof TsDoctor]}`);
}

// 4. while
console.log("\n--- while ---");
let tsPatientsLeft: number = tsPatientQueue.length;
while (tsPatientsLeft > 0) {
    console.log(`Patients remaining: ${tsPatientsLeft}`);
    tsPatientsLeft--;
}
console.log("Waiting room khaali!");

// 5. break
console.log("\n--- break ---");
for (const tsPatient of tsPatientQueue) {
    if (tsPatient.isEmergency) {
        console.log(`🔴 Emergency: ${tsPatient.name}`);
        break;
    }
    console.log(`${tsPatient.name} — normal`);
}

// 6. continue
console.log("\n--- continue ---");
for (const tsPatient of tsPatientQueue) {
    if (tsPatient.isEmergency) continue;
    console.log(`✅ Regular: ${tsPatient.name}`);
}

// 7. Real Use
let tsTotalRevenue: number = 0;
let tsEmergencyCount: number = 0;
let tsSeniorCount: number = 0;

for (const tsPatient of tsPatientQueue) {
    tsTotalRevenue += tsPatient.fee;
    if (tsPatient.isEmergency) tsEmergencyCount++;
    if (tsPatient.age >= 60) tsSeniorCount++;
}

console.log(`
╔══════════════════════════════╗
║     VOICEDOC AI REPORT       ║
╠══════════════════════════════╣
║ Doctor        : ${tsDoctorProfile.name}
║ Total Patients: ${tsPatientQueue.length}
║ Emergency     : ${tsEmergencyCount}
║ Senior (60+)  : ${tsSeniorCount}
║ Total Revenue : ₹${tsTotalRevenue}
╚══════════════════════════════╝
`);