# ============================================
# F10 - ARROW FUNCTIONS & LAMBDAS
# Project: VoiceDoc AI - Doctor Voice Agent
# Run: python python/F10_arrow.py
# ============================================

doctor_profile = {
    "id": "DOC001",
    "name": "Dr. Priya Sharma",
    "specialization": "Cardiology",
    "fee": 800,
    "rating": 4.8,
    "available": True
}

patient_queue = [
    { "name": "Ramesh Kumar",  "age": 67, "fee": 800,  "is_emergency": True  },
    { "name": "Suresh Sharma", "age": 34, "fee": 500,  "is_emergency": False },
    { "name": "Priya Patel",   "age": 71, "fee": 1200, "is_emergency": True  },
    { "name": "Mahesh Singh",  "age": 28, "fee": 600,  "is_emergency": False },
    { "name": "Kavita Mehta",  "age": 55, "fee": 800,  "is_emergency": False }
]


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 1 - Lambda — Python ka Arrow Function
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# JS Arrow:  name => `Namaste Dr. ${name}!`
# PY Lambda: lambda name: f"Namaste Dr. {name}!"

greet = lambda name: f"Namaste Dr. {name}!"
get_hospital = lambda: "Apollo Hospital"
calc_fee = lambda fee, gst_rate: fee + (fee * gst_rate)

print(greet(doctor_profile["name"]))
print(get_hospital())
print(calc_fee(800, 0.18))


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 2 - Lambda + map/filter
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# map() — fees with GST
fees_with_gst = list(map(
    lambda p: p["fee"] * 1.18,
    patient_queue
))
print("\nFees with GST:", fees_with_gst)

# filter() — emergency patients
emergency_patients = list(filter(
    lambda p: p["is_emergency"],
    patient_queue
))
print("\nEmergency count:", len(emergency_patients))

# List comprehension — Python ka preferred way
senior_patients = [p for p in patient_queue if p["age"] >= 60]
print("\nSenior patients:", len(senior_patients))


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PART 3 - Real Project Use
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

add_gst = lambda fee: fee * 1.18
get_discount = lambda fee: fee * 0.10

def get_priority(patient):
    if patient["is_emergency"]:
        return "🔴 HIGH"
    if patient["age"] >= 60:
        return "🟡 MEDIUM"
    return "🟢 NORMAL"

def generate_bill(patient):
    is_senior = patient["age"] >= 60
    discount = get_discount(patient["fee"]) if is_senior else 0
    total = add_gst(patient["fee"] - discount)
    return {
        "name": patient["name"],
        "priority": get_priority(patient),
        "base_fee": patient["fee"],
        "discount": discount,
        "total": f"{total:.2f}"
    }

print("\n=== BILLS ===")
for patient in patient_queue:
    bill = generate_bill(patient)
    print(f"""
{bill['priority']} {bill['name']}
Base: ₹{bill['base_fee']} | Discount: ₹{bill['discount']} | Total: ₹{bill['total']}
    """)