const body = document.querySelector('body')

function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(resp => resp.json())
    .then(data => {        
        body.insertAdjacentHTML('beforeend', `
            <h4>
                ${data.id}
            </h4>`
        )
    })
    .catch(error => {
        body.insertAdjacentHTML('beforeend', `
            <h4>
                ${error.message}
            </h4>`
        )
    })
}