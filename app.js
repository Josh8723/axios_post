// async function getUsers() {
//   const res = await axios.get("https://reqres.in/api/users");
//   console.log(res);
// }

// async function createUser() {
//   const res = await axios.post("https://reqres.in/api/users", {
//     username: "ButtersTheChicken",
//     email: "butters@gmail.com",
//     age: 1,
//   });
//   console.log(res);
// }
// createUser();

//reqres.in/

async function getUsers(token) {
  const res = await axios.get("https://hack-or-snooze-v3.herokuapp.com/users", {
    params: { token },
  });
  console.log(res);
}

async function singUp(username, password, name) {
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/signup",
    { user: { name, username, password } }
  );
  console.log(res);
}

async function login(username, password) {
  const res = await axios.post(
    "https://hack-or-snooze-v3.herokuapp.com/signup",
    { user: { username, password } }
  );
  console.log(res);
  return res.data.token;
}

async function getUsersWithAuth() {
  const token = await login("butterschicken", "234w3eohfbns");
  getUsers(token);
}
// getUsers();
// singUp("butterschicken", "234w3eohfbns", "butters the chicken");
getUsersWithAuth();
