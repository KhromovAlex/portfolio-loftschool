(function() {
  const doc = document,
    axios = require("axios");

  const mailForm = {
    form: doc.querySelector(".feedback-form"),
    status: doc.querySelector(".status-mail")
  };

  function post() {
    mailForm.form.addEventListener("submit", function(e) {
      e.preventDefault();
      const username = mailForm.form.username.value,
        email = mailForm.form.email.value,
        text = mailForm.form.text.value;
      axios({
        method: "post",
        url: "/works/contact",
        data: {
          username: username,
          email: email,
          text: text
        }
      })
        .then(res => {
          if (res.data.msgMail) {
            mailForm.status.innerHTML = res.data.msgMail;
          }
        })
        .catch(err => {
          mailForm.status.innerHTML = "Произошла ошибка!";
        });
    });
  }

  function init() {
    if (mailForm.form) {
      post();
    }
  }

  module.exports = init;
})();
