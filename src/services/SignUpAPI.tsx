export async function callSignUpAPI({userName, id, password} : {userName: string, id: String, password: string}) {
    const request = {
        "username" : id,
        "password" : password,
        "name" : userName
    }
    console.log(userName)
    console.log(id)
    console.log(password)
    console.log(import.meta.env.REACT_APP_SERVER_URL)
    // console.log(process.env.REACT_APP_SERVER_URL)
    const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/signup', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(request)
    })

    if(response.ok) {
        const errMsg = await response.json();
        return new Error(errMsg || 'failed to fetch data')
    }

    return response.json();
}