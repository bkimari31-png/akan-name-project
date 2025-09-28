(function(){
  const akanNames = {
    Sunday:   { male: "Kwasi",   female: "Akosua" },
    Monday:   { male: "Kwadwo",  female: "Adwoa" },
    Tuesday:  { male: "Kwabena", female: "Abenaa" },
    Wednesday:{ male: "Kwaku",   female: "Akua" },
    Thursday: { male: "Yaw",     female: "Yaa" },
    Friday:   { male: "Kofi",    female: "Afua" },
    Saturday: { male: "Kwame",   female: "Ama" }
  };

  const form = document.getElementById('akanForm');
  const result = document.getElementById('result');
  const resetBtn = document.getElementById('resetBtn');

  function showMessage(msg){
    result.hidden = false;
    result.textContent = msg;
  }

  function getDayNameFromDate(date){
    // Use UTC to avoid timezone surprises when date input has no time
    const d = new Date(date + 'T00:00:00');
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[d.getDay()];
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    if(!dob || !gender){
      showMessage('Please enter your birthdate and select gender.');
      return;
    }

    const dayName = getDayNameFromDate(dob);
    const nameObj = akanNames[dayName];
    if(!nameObj){
      showMessage('Could not determine Akan name.');
      return;
    }

    const akanName = nameObj[gender];
    showMessage(`You were born on a ${dayName}. Your Akan name is ${akanName}.`);
  });

  resetBtn.addEventListener('click', function(){
    form.reset();
    result.hidden = true;
    result.textContent = '';
  });
})();
