import axios from "axios";
import "./scss/index.scss";

// generator function runtime - e.g. async / await enabler
import "core-js/stable";
import "regenerator-runtime/runtime";

// elements
const form = document.getElementById("form-input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // get form values
  const name = document.getElementById("name-input");
  const email = document.getElementById("email-input");
  const message = document.getElementById("message-input");

  console.log(name.value, email.value, message.value);
  try {
    const res = await axios({
      method: "POST",
      url: "https://www.applify-tech.com/api/v1/messages",
      data: {
        name: name.value,
        email: email.value,
        message: message.value,
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }

  name.value = "";
  email.value = "";
  message.value = "";
});
