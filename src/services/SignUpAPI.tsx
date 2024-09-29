async function callSignUpAPI({userName, id, password} : {userName: string, id: String, password: string}) {
    const request = {
        "username" : id,
        "password" : password,
        "name" : userName
    }
    const response = await fetch(process.env.REACT_APP_BASE_URL + '/signup', {
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