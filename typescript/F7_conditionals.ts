type Doctor ={

    id : string;
      name: string;
    specialization: string;
    fee: number;
    rating: number;
    available: boolean;

};
type Patient = {
    name: string;
    age: number;
    isEmergency: boolean;
    isPaid: boolean;
};

const DoctorProfele :Doctor ={

     id: "DOC001",
    name: "Dr. Priya Sharma",
    specialization: "Cardiology",
    fee: 800,
    rating: 4.8,
    available: true
}

const patent: Patient = {
    name: "Ramesh Kumar",
    age: 67,
    isEmergency: true,
    isPaid: true
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 1 - if/else
// 

if (DoctorProfele.available){
    console.log(`${DoctorProfele.name} availabe hain`);
} else{
    console.log(`${DoctorProfele.name

    } busy hain `);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 2 - else if
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
if (patent.age<=12){
    console.log("child -patriatic ward ");
} else if (patent.age<=59){
    console.log("adult -general ward ");
} else {
    console.log("seniour ward");
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 3 - Ternary
// ━━

const prority : string = patent.isEmergency ?  "high" : " normal";
const issenior : boolean = patent.age>=60;
const dicount : number =issenior ? DoctorProfele.fee*0.10 :0 ;  
const Finalfee : number =DoctorProfele.fee - dicount ;

console.log(`Priority: ${prority}`);
console.log(`Discount: ₹${dicount}`);
console.log(`Final Fee: ₹${Finalfee}`);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 4 - Switch
// ━━

switch (DoctorProfele.specialization){
    case "cardiology":
        console.log("heart speacialist , room 101");
        break ;
    case "nuerology":
        console.log("neural scintient , room 102 ") ;
        break ;
    default:
        console.log(" genrraln, room number 103 ")
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PART 5 - Real Project Use
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


function chekAppointment(doctor: Doctor, pat: Patient): void {

    if (!doctor.available) {
        console.log("❌ Doctor available nahi!");
        return;
    }

    if (pat.isEmergency) {
        console.log("🔴 EMERGENCY — Seedha andar!");
        return;
    }

    const seniorDiscount: number = pat.age >= 60
        ? doctor.fee * 0.10
        : 0;

    const totalFee: number = doctor.fee - seniorDiscount;

    console.log(`
╔══════════════════════════════╗
║    APPOINTMENT CONFIRMED     ║
╠══════════════════════════════╣
║ Doctor  : ${doctor.name}
║ Patient : ${pat.name}
║ Fee     : ₹${doctor.fee}
║ Discount: ₹${seniorDiscount}
║ Total   : ₹${totalFee}
╚══════════════════════════════╝
    `);
}

chekAppointment(DoctorProfele, patent);