// Hardcoded user credentials
const users = {
  "user1": "pass1",
  "user2": "pass2",
  "admin": "admin123"
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (users[username] && users[username] === password) {
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("customerSection").classList.remove("hidden");
  } else {
    alert("Invalid username or password.");
  }
});

document.getElementById("customerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    customerName: document.getElementById("customerName").value,
    phone: document.getElementById("phone").value,
    date: document.getElementById("date").value,
    service: document.getElementById("service").value,
    note: document.getElementById("note").value,
  };

  fetch("https://script.google.com/macros/s/AKfycbwN0PLC2lBx9SSO3D_MjKePlijBus5yn1AneM1Z13vxc8q-lhR9XlDUPu_411ZUOkL_Iw/exec", {
    method: "POST",
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(response => {
    alert("Form submitted successfully!");
    document.getElementById("customerForm").reset();
  })
  .catch(err => alert("Error: " + err));
});
