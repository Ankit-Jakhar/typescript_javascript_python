# ============================================
# F7 - CONDITIONALS
# Project: VoiceDoc AI - Doctor Voice Agent
# Run: python python/F7_conditionals.py
# ============================================

doctor_profile = {
    "id": "DOC001",
    "name": "Dr. Priya Sharma",
    "specialization": "Cardiology",
    "fee": 800,
    "rating": 4.8,
    "available": True
}

patient = {
    "name": "Ramesh Kumar",
    "age": 67,
    "is_emergency": True,
    "is_paid": True
}



# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 1 - if/else
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


if doctor_profile["available"]:
    print(f"{doctor_profile['name']} available hain ");
else:
    print(f"{doctor_profile["name"]} busy haib")

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 2 - elif
# ━

age =patient["age"]

if age<=12:
    print("children , patriayatik ward ")
elif age<=60:
    print("adult hain - general ward ")
else:
    print("seniour ward ")


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 3 - Ternary (Python style)
# ━

priority ="high" if patient["is_emergency"] else " normal"
is_seniour = patient["age"]>=60
discount = doctor_profile["fee"]*0.10 if is_seniour else 0
final_fee = doctor_profile["fee"]-discount

print(f"Priority: {priority}")
print(f"Discount: ₹{discount}")
print(f"Final Fee: ₹{final_fee}")

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 4 - Match (Python 3.10+ Switch)
# ━. in java scipt for cases we used switch and in python baiscally we used match 

match doctor_profile["specialization"]:
    case"Cardiology":
        print(" heart speacialist , room 101")

    case"nuerology ":
        print("brain speacialist , room number 203 ")

    case _:
        print(" general ward  room number 304 ")

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 5 - Real Project Use
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def check_appointment(doctor, pat):

    if not doctor["available"]:
        print("❌ Doctor available nahi!")
        return

    if pat["is_emergency"]:
        print("🔴 EMERGENCY — Seedha andar!")
        return

    senior_discount = doctor["fee"] * 0.10 if pat["age"] >= 60 else 0
    total_fee = doctor["fee"] - senior_discount

    print(f"""
╔══════════════════════════════╗
║    APPOINTMENT CONFIRMED     ║
╠══════════════════════════════╣
║ Doctor  : {doctor['name']}
║ Patient : {pat['name']}
║ Fee     : ₹{doctor['fee']}
║ Discount: ₹{senior_discount}
║ Total   : ₹{total_fee}
╚══════════════════════════════╝
    """)

check_appointment(doctor_profile, patient)