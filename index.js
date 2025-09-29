const akanNames = {
  Sunday:    { male: "Kwasi",   female: "Akosua" },
  Monday:    { male: "Kwadwo",  female: "Adwoa"  },
  Tuesday:   { male: "Kwabena", female: "Abenaa" },
  Wednesday: { male: "Kwaku",   female: "Akua"   },
  Thursday:  { male: "Yaw",     female: "Yaa"    },
  Friday:    { male: "Kofi",    female: "Afua"   },
  Saturday:  { male: "Kwame",   female: "Ama"    }
};

const birthdateInput = document.getElementById("birthdate");
const genderInput = document.getElementById("gender");
const resultDiv = document.getElementById("result");

function showAkanName() {
  const birthdate = birthdateInput.value;
  const gender = genderInput.value;

  if (!birthdate || !gender) {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Please select both date and gender.";
    return;
  }

  const date = new Date(birthdate);
  if (isNaN(date.getTime())) {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Invalid date.";
    return;
  }

  const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
  const akanName = akanNames[dayOfWeek][gender];

  resultDiv.style.color = "green";
  resultDiv.textContent = `You were born on a ${dayOfWeek}. Your Akan name is ${akanName}.`;
}

// Update result when either input changes
birthdateInput.addEventListener("change", showAkanName);
genderInput.addEventListener("change", showAkanName);



