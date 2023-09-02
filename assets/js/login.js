


function login(event){
event.preventDefault();
const email = document.querySelector("#email").value;
const pass = document.querySelector("#pass").value;
const chec = document.querySelector("#chec").checked;


fetch("https://back.black-analysis-solutions.com/api/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ "email" : email,"password" : pass,"remember" : chec}),
  })
    .then((res) => res.json())
    .then((res) => {
console.log(res)
    })
/* console.log({ "email" : email,"password" : pass,"remember" : chec}) */
}