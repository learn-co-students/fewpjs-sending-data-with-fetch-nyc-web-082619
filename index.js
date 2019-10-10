// Add your code here
function addDog(name, breed){
    fetch(`http://localhost:3000/dogs/`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
            dogName: `${name}`,
            dogBreed: `${breed}`
        })
    })
};

function submitData(name, email){
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
                name: `${name}`,
                email: `${email}`
            })
        }

    fetch(`http://localhost:3000/users/`, configObj)
    .then(object => object.json())
    .then(function(data){
        document.body.append(`${data.id}`)
    })
    .catch(alert)
};