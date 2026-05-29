// ============================================
// F9 - FUNCTIONS
// Project: VoiceDoc AI - Doctor Voice Agent
// Run: bun typescript/F9_functions.ts
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


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 1 - Basic Function
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function tsGreetDoctor(name: string): string {
//                      ↑      ↑       ↑
//                  Parameter  Type  Return Type

    return `Namaste, ${name}!`;
}

console.log(tsGreetDoctor(tsDoctorProfile.name));


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 2 - Parameters aur Return
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function tsCalculateFee(baseFee: number, hasDiscount: boolean): number {
    const gst = baseFee * 0.18;
    const discount = hasDiscount ? baseFee * 0.10 : 0;
    return baseFee + gst - discount;
}

console.log(`Fee: ₹${tsCalculateFee(800, false)}`);  // ₹944
console.log(`Fee: ₹${tsCalculateFee(800, true)}`);   // ₹864


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 3 - Default Parameters
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function tsBookAppointment(
    patientName: string,
    time: string = "9:00 AM"
): string {
    return `${patientName} ka appointment ${time} pe hai`;
}

console.log(tsBookAppointment("Ramesh Kumar"));
console.log(tsBookAppointment("Suresh Sharma", "2:00 PM"));


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 4 - void Function
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function tsPrintPatientInfo(patient: TsPatient): void {
//                                               ↑
//                                          void = kuch return nahi!

    console.log(`
--- Patient Info ---
Name     : ${patient.name}
Age      : ${patient.age}
Fee      : ₹${patient.fee}
Emergency: ${patient.isEmergency ? "YES 🔴" : "NO 🟢"}
    `);
}

tsPrintPatientInfo(tsPatientQueue[0]);


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 5 - Arrow Functions
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const tsAddGst = (fee: number): number => fee * 1.18;

const tsCheckPatient = (patient: TsPatient): object => {
    const isSenior = patient.age >= 60;
    const discount = isSenior ? patient.fee * 0.10 : 0;
    return {
        name: patient.name,
        discount: discount,
        finalFee: patient.fee - discount
    };
};

console.log(tsAddGst(800));
console.log(tsCheckPatient(tsPatientQueue[0]));


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 6 - Real Project Use
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function tsGetPriority(patient: TsPatient): string {
    if (patient.isEmergency) return "🔴 HIGH";
    if (patient.age >= 60) return "🟡 MEDIUM";
    return "🟢 NORMAL";
}

function tsGenerateReport(doctor: TsDoctor, patients: TsPatient[]): void {
    let tsTotalRevenue: number = 0;
    let tsEmergencyCount: number = 0;

    console.log(`\n=== ${doctor.name} — Patient Report ===\n`);

    for (const tsPatient of patients) {
        const tsFinalFee: number = tsCalculateFee(
            tsPatient.fee,
            tsPatient.age >= 60
        );
        const tsPriority: string = tsGetPriority(tsPatient);

        tsTotalRevenue += tsFinalFee;
        if (tsPatient.isEmergency) tsEmergencyCount++;

        console.log(`${tsPriority} ${tsPatient.name} — ₹${tsFinalFee}`);
    }

    console.log(`
╔══════════════════════════════╗
║     VOICEDOC AI REPORT       ║
╠══════════════════════════════╣
║ Doctor        : ${doctor.name}
║ Total Patients: ${patients.length}
║ Emergency     : ${tsEmergencyCount}
║ Total Revenue : ₹${tsTotalRevenue.toFixed(2)}
╚══════════════════════════════╝
    `);
}

tsGenerateReport(tsDoctorProfile, tsPatientQueue);