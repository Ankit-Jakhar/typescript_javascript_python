// ============================================
// F7 - CONDITIONALS
// Project: VoiceDoc AI - Doctor Voice Agent
// Run: node javascript/F7_conditionals.js
// ============================================


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 1 - Basic if/else
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const doctorProfile = {
    id: "DOC001",
    name: "Dr. Priya Sharma",
    specialization: "Cardiology",
    fee: 800,
    rating: 4.8,
    available: true,
    address: {
        hospital: "Apollo Hospital",
        city: "Delhi",
        room: 101
    }
};

// Basic if/else
if (doctorProfile.available) {
    console.log(`${doctorProfile.name} available hai!`);
} else {
    console.log(`${doctorProfile.name} busy hai!`);
}
// "Dr. Priya Sharma available hai!"


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 2 - if / else if / else
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const patientAge = 67;

if (patientAge <= 12) {
    console.log("Child patient — Pediatric ward");
} else if (patientAge <= 17) {
    console.log("Teen patient — General ward");
} else if (patientAge <= 59) {
    console.log("Adult patient — General ward");
} else if (patientAge <= 74) {
    console.log("Senior patient — Senior ward");
} else {
    console.log("Critical senior — ICU ward");
}
// "Senior patient — Senior ward"


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 3 - Nested if
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const patient = {
    name: "Ramesh Kumar",
    age: 67,
    isEmergency: true,
    isPaid: true
};

// If ke andar if — nested
if (patient.isEmergency) {
    console.log("Emergency patient hai!");

    if (patient.isPaid) {
        console.log("Payment hua — treatment shuru karo!");
    } else {
        console.log("Payment pending — but emergency hai treatment do!");
    }
} else {
    console.log("Normal patient — queue mein rakho");
}
// "Emergency patient hai!"
// "Payment hua — treatment shuru karo!"


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 4 - Ternary Operator
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// condition ? "true hone par" : "false hone par"

const isSenior = patient.age >= 60
    ? "Senior Citizen"
    : "Regular Patient";
console.log(isSenior);  // "Senior Citizen"

const priority = patient.isEmergency
    ? "🔴 HIGH"
    : "🟢 NORMAL";
console.log(priority);  // "🔴 HIGH"

const discount = patient.age >= 60
    ? patient.age * 0.10   // 10% discount
    : 0;
console.log(`Discount: ₹${discount}`);


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 5 - Switch Statement
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Switch — ek value ke multiple cases check karo
const specialization = doctorProfile.specialization;

switch (specialization) {
    case "Cardiology":
        console.log("Heart specialist — Room 101");
        break;  // Zaroori hai! Bina break → next case bhi chalega!

    case "Neurology":
        console.log("Brain specialist — Room 202");
        break;

    case "Orthopedics":
        console.log("Bone specialist — Room 303");
        break;

    default:
        console.log("General physician — Room 001");
        break;
}
// "Heart specialist — Room 101"


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 6 - Logical Operators with Conditions
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const isPaymentDone = true;
const isClinicOpen = true;

// AND — &&
if (doctorProfile.available && isPaymentDone && isClinicOpen) {
    console.log("✅ Session shuru kar sakte hain!");
} else {
    console.log("❌ Session shuru nahi ho sakta!");
}

// OR — ||
if (patient.isEmergency || patient.age >= 70) {
    console.log("🔴 High Priority Patient!");
}

// NOT — !
if (!doctorProfile.available) {
    console.log("Doctor busy hai!");
} else {
    console.log("Doctor free hai!");
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 7 - Real Project Use
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function checkAppointment(doctor, pat) {
    console.log("\n--- Appointment Check ---");

    // Step 1 — Doctor available hai?
    if (!doctor.available) {
        console.log("❌ Doctor available nahi!");
        return;   // Function band karo
    }

    // Step 2 — Emergency check
    if (pat.isEmergency) {
        console.log("🔴 EMERGENCY — Seedha andar bhejo!");
        return;
    }

    // Step 3 — Age based priority
    if (pat.age >= 60) {
        console.log("👴 Senior citizen — Priority queue mein daalo!");
    } else {
        console.log("👤 Normal patient — Regular queue mein daalo!");
    }

    // Step 4 — Fee calculate
    const baseFee = doctor.fee;
    const seniorDiscount = pat.age >= 60 ? baseFee * 0.10 : 0;
    const finalFee = baseFee - seniorDiscount;

    console.log(`
╔══════════════════════════════╗
║    APPOINTMENT CONFIRMED     ║
╠══════════════════════════════╣
║ Doctor  : ${doctor.name}
║ Patient : ${pat.name}
║ Base Fee: ₹${baseFee}
║ Discount: ₹${seniorDiscount}
║ Final   : ₹${finalFee}
╚══════════════════════════════╝
    `);
}

// Function call karo
checkAppointment(doctorProfile, patient);


// javascript/F7_conditionals.js mein likho

// Q1 — if/else
// Doctor ki rating check karo:
// 4.5+  → "Premium Doctor"
// 4.0+  → "Good Doctor"
// Neeche → "Average Doctor"
// const rating = 4.2;

// // Q2 — Ternary
// // Patient age 60+ hai toh fee mein
// // 10% discount do — warna 0
// const patientAge = 67;
// const fee = 800;

// Q3 — Switch
// Patient ki blood group check karo
// "O+" → "Universal Donor"
// "AB+" → "Universal Recipient"
// Default → "Regular Blood Group"


const ramesh = {
    rating: 4.6 ,
    age :67,
    fee :800,
    bloodGroup :"o+"
}

// baisic if else 

if (ramesh.rating>=4.5) {
    console.log("permium doctor ");

}
else if  (ramesh.rating<=4.5){
    console.log("good doctor ");
}
else {
    console.log("bad doctor ")
}

// quese 2
const discut = (ramesh.age >=60) ? ramesh.fee*0.1 :0 ;
const totalFees = ramesh.fee -discut
console.log(discut)
console.log(totalFees)


//quese 3

switch (ramesh.bloodGroup){
    case "o+":
        console.log("universal donor ");
        break;
    case "ab+":
        console.log("ab+");
        break ;

    case "b+":
        console.log("b")
        break;
    
}