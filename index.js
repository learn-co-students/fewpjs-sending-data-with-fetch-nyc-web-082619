// Add your code here

function submitData(userName, userEmail) {
  const bodyContent = {
    name: userName,
    email: userEmail
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(bodyContent)
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      document.body.insertAdjacentHTML("afterbegin", object.id);
    })
    .catch(message => {
      document.body.insertAdjacentHTML("afterbegin", message);
    });
}
