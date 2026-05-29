// ============================================
// F6 - OBJECTS / DICTIONARIES
// Project: VoiceDoc AI - Doctor Voice Agent
// Run: bun typescript/F6_objects.ts
// ============================================


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 1 - Type Define Karo (TS Only)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 
 
 // Doctor ka type — har field ka type batao


 type Doctor ={
    name : string , 
    id : string , 
    specialization : string , 
    fee : number ,
    rating : number , 
    available : boolean, 
    address :{
        citys : string, 
        room : string, 
        hospital : string 

    }
 };


 // Session ka type
type Session = {
    doctorNam: string;
    patientNam: string;
    feed: number;
    duration: number;
    transcript: string[];
};  


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 2 - Object Banana
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


const DoctorProfile : Doctor =   {
    id: "DOC001",
    name: "Dr. Priya Sharma",
    specialization: "Cardiology",
    fee: 800,
    rating: 4.8,
    available: true,
    address: {
        hospital: "Apollo Hospital",
        citys: "Delhi",
        room: "101"
    }
};

console.log("\n--- Doctor Profile ---");

console.log(DoctorProfile);

DoctorProfile.fee =1000
console.log(DoctorProfile)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 3 - Access Karna
// 

// accesing values 

console.log(DoctorProfile.address.room); //// Nested access
console.log("Fee:", DoctorProfile.fee); // dot notation 


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 4 - Destructuring
// ━━ 

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 4 - Destructuring
// ━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 4 - Destructuring
// ━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
console.log("\n--- Destructuring ---");

const sesion : Session ={

     doctorNam: "Dr. Priya Sharma",
    patientNam: "Ramesh Kumar",
    feed: 800,
    duration: 30,
    transcript: []
}

// baisc desruction

const {doctorNam, patientNam , feed} =sesion ;

console.log("doctorname " , doctorNam);
console.log("patient name " , patientNam);
console.log("fees" , feed)

// Nested destructuring 

const {address :{citys , hospital}} =DoctorProfile;

console.log("City:", citys);
console.log("Hospital:", hospital);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 5 - Spread Operator
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.log("\n--- Spread Operator ---");

// Session shuru — doctor busy ho gaya
const activeSession = {
    ...DoctorProfile,       // Sab copy karo
    available: false,       // Override karo
    currentPatient: "Ramesh Kumar",
    sessionStart: "10:30 AM"
};

console.log("Available:", activeSession.available);   // false
console.log("Patient:", activeSession.currentPatient);
console.log("Original Available:", DoctorProfile.available); // true — safe!

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 6 - Object Methods + Loop
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
console.log("\n--- Object Loop ---"); 

// Object.entries() se loop

for (const [key , value ] of Object.entries(DoctorProfile)){
    if (typeof value !== "object"){
        console.log(`${key}: ${value}`);
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 7 - Real Project Use
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const { name: docName, specialization, fee: docFee } = DoctorProfile;

console.log(`
╔══════════════════════════════╗
║      VOICEDOC AI SESSION     ║
╠══════════════════════════════╣
║ Doctor : ${docName}
║ Dept   : ${specialization}
║ Fee    : ₹${docFee}
║ Patient: ${activeSession.currentPatient}
║ Time   : ${activeSession.sessionStart}
║ Status : ${activeSession.available ? "Free" : "In Session"}
╚══════════════════════════════╝
`);