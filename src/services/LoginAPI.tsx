export async function callLoginAPI({id, password} : {id: string, password: string}) {
    const request = {
        "username" : id,
        "password" : password
    }
    const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/login', {
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