/* Static GK · Classical & Folk Dances · Set 1
   SAMPLE PLACEHOLDER (8 questions). Replace with your real 100-question set, keeping the same file name.
   Format per question: Q(question, [4 options], correctIndex 0-3, explanation) */
{
const Q = (question, options, correctAnswer, explanation) => ({ question, options, correctAnswer, explanation, source: "Sample" });

registerSet("classical-folk-dances", 1, [
  Q("Kathakali is a classical dance form of which state?", ["Tamil Nadu", "Kerala", "Odisha", "Manipur"], 1, "Kathakali originated in Kerala."),
  Q("Bharatanatyam belongs to which state?", ["Andhra Pradesh", "Karnataka", "Tamil Nadu", "Assam"], 2, "Bharatanatyam is the classical dance of Tamil Nadu."),
  Q("Garba is a folk dance of:", ["Rajasthan", "Gujarat", "Punjab", "Goa"], 1, "Garba is traditionally performed in Gujarat, mainly during Navratri."),
  Q("Bihu is the folk dance of:", ["Assam", "Bihar", "Odisha", "Tripura"], 0, "Bihu is associated with the Assamese festival of the same name."),
  Q("Odissi originated in:", ["Odisha", "West Bengal", "Chhattisgarh", "Jharkhand"], 0, "Odissi is the classical dance of Odisha."),
  Q("Sattriya, recognised as a classical dance in 2000, comes from:", ["Manipur", "Assam", "Kerala", "Gujarat"], 1, "Sattriya was developed by Srimanta Sankardev in Assam."),
  Q("Ghoomar is a traditional folk dance of:", ["Maharashtra", "Haryana", "Rajasthan", "Madhya Pradesh"], 2, "Ghoomar is a Rajasthani women's folk dance."),
  Q("Lavani is a popular folk form of:", ["Maharashtra", "Karnataka", "Telangana", "Goa"], 0, "Lavani is a well-known Maharashtrian song and dance genre.")
]);
}
