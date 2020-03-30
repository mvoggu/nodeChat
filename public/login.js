document.forms["loginForm"].addEventListener("submit", e => {
  e.preventDefault();
  uname = document.getElementById("uname").value;
  pass = document.getElementById("pass").value;
  rememberMe = document.getElementById("rememberMe").checked;
  console.log("Username " + uname);
  console.log("Password: " + pass);
  console.log("rememberMe: " + rememberMe);
  document.getElementById("loginForm").reset();
  //   token = "";
  //   (async () => {
  //     const rawResponse = await fetch("/api/user/login", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ username: uname, password: pass })
  //     });
  //     const content = await rawResponse.text();

  //     console.log(content);
  //   })();

  //   (async () => {
  //     await fetch("/api/user/login", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ username: uname, password: pass })
  //     })
  //       .then(response => {
  //         return response.text();
  //       })
  //       .then(data => (token = data))
  //       .catch(err => {
  //         console.error(err);
  //         // alert("Error logging in please try again");
  //       });

  //     // console.log(token);
  //   })().then(() => {
  //     console.log(token);
  //   });
  (async () => {
    await fetch("/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: uname,
        password: pass,
        rememberMe: rememberMe
      })
    }).then(response => {
      if (response.status === 200) {
        console.log("Login successful");
        // alert("Login successful");
        window.location.href = "../messenger";
      } else {
        console.log("Login Failed");
        alert("Login failed");
      }
    });
  })();
});
