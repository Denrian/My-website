document.addEventListener("DOMContentLoaded", function () {
  greetUser(); 
  console.log("greetUser() was called");

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields.");
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (message.length < 10) {
        alert("Your message should be at least 10 characters.");
        return;
      }

      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    });
  }

  const surveyForm = document.getElementById("survey-form");
  if (surveyForm) {
    surveyForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const experience = document.getElementById("experience").value;

      if (fullname === "" || experience === "") {
        alert("Please complete all required fields.");
        return;
      }

      alert("Thanks for taking the survey, " + fullname + "!");
      surveyForm.reset();
    });
  }
});

// ✅ Only this greeting function is needed
function greetUser() {
  const greetingEl = document.getElementById("greeting");
  if (!greetingEl) return;

  const now = new Date();
  const hour = now.getHours();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  let greeting = "";

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  greetingEl.textContent = `${greeting}! I'm Melody, based on your local time (${timeZone}).`;
}
