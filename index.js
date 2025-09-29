// Akan Names Data
const akanNames = {
  0: { male: "Kwasi", female: "Akosua" },   // Sunday
  1: { male: "Kwadwo", female: "Adwoa" },   // Monday
  2: { male: "Kwabena", female: "Abenaa" }, // Tuesday
  3: { male: "Kwaku", female: "Akua" },     // Wednesday
  4: { male: "Yaw", female: "Yaa" },        // Thursday
  5: { male: "Kofi", female: "Afua" },      // Friday
  6: { male: "Kwame", female: "Ama" }       // Saturday
};

// Function to calculate Akan name
function generateAkanName() {
  // Get user inputs
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = document.getElementById("year").value;
  const gender = document.querySelector("input[name='gender']:checked");

  // Validate input
  if (isNaN(day) || day < 1 || day > 31) {
    alert("Please enter a valid day (1 - 31).");
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    alert("Please enter a valid month (1 - 12).");
    return;
  }

  if (!year || year.length !== 4 || isNaN(year)) {
    alert("Please enter a valid 4-digit year.");
    return;
  }

  if (!gender) {
    alert("Please select a gender.");
    return;
  }

  // Split year into CC and YY
  const CC = parseInt(year.substring(0, 2));
  const YY = parseInt(year.substring(2));

  const DD = day;
  const MM = month;

  // Formula: d = ((4 * CC - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7
  // Using your given formula (rewritten properly):
  let d = ((4 * CC - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7;

  // Convert to integer day index (0 - 6)
  d = Math.floor(d);

  // Ensure positive index
  if (d < 0) {
    d = (d + 7) % 7;
  }

  // Retrieve Akan name
  const selectedGender = gender.value;
  const akanName = akanNames[d][selectedGender];

  // Display result
  document.getElementById("result").innerText = 
    `You were born on ${getDayName(d)}. Your Akan name is ${akanName}.`;
}

// Helper: Get day name
function getDayName(index) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[index];
}





