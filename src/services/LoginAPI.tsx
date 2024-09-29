export async function callLoginAPI({id, password} : {id: string, password: string}) {
    const request = new FormData();
    request.append("username", id);
    request.append("password", password);
    console.log(import.meta.env.REACT_APP_SERVER_URL)
    // console.log(process.env.REACT_APP_SERVER_URL)
    const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/login', {
        method : "POST",
        headers : {
            "Content-Type" : "multipart/form-data"
        },
        body : request
    })

    if(response.ok) {
        const errMsg = await response.json();
        return new Error(errMsg || 'failed to fetch data')
    }

    return response.json();
}