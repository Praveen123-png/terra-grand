AOS.init();

// contact form
document.addEventListener("DOMContentLoaded", () => {
  let submitForm = document.getElementById("submitForm");
  console.log("element found");
  let myNum = "";
  let url;

  submitForm.addEventListener("click", (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let projectType = document.getElementById("projectType").value;
    let message = document.getElementById("message").value.trim();

    if (name && email && phone && message && projectType) {
      const messageNew = `Hi, I'm ${name},\nThese are my details \n• Mobile: ${phone}.\n• Email: ${email}\n• Project Type: ${projectType}\n\n Message: ${message} \n\nThank you!`;
      const enCoded = encodeURIComponent(messageNew);
      url = `https://wa.me/${myNum}?text=${enCoded}`;
      // url = `https://api.whatsapp.com/${myNum}?text=${enCoded}`;
      window.open(url);
    } else {
      console.log("error");
      document.getElementById("warning-text").style.display = "block";
    }
  });
});

console.log("js file loaded successfully");
