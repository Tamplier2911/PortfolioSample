import axios from "axios";

export const formEventListener = async (e) => {
  e.preventDefault();

  // get form values
  const name = document.getElementById("name-input");
  const email = document.getElementById("email-input");
  const message = document.getElementById("message-input");

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
};
