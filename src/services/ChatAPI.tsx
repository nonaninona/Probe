export async function callGetChatRoomListAPI({id}: {id: string}) {
    const JWT = localStorage.getItem("JWT")

    const request = {
        "username" : id,
    }
    const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/member/getAllChatRoomsResponse', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : JWT!
        },
        body : JSON.stringify(request)
    })

    if(response.ok) {
        const errMsg = await response.json();
        return new Error(errMsg || 'failed to fetch data')
    }

    return response.json();
}

export async function callGetChatListAPI({chatRoomId}: {chatRoomId: number}) {
    const JWT = localStorage.getItem("JWT")

    const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/chat/getAllChatsFromChatRoom/' + chatRoomId, {
        method : "GET",
        headers : {
            "Authorization" : JWT!
        }
    })

    if(response.ok) {
        const errMsg = await response.json();
        return new Error(errMsg || 'failed to fetch data')
    }

    return response.json();
}

export async function callMakeChatRoomAPI({username, title}: {username: string, title: string}) {
    const JWT = localStorage.getItem("JWT")

    const request = {
        "username" : username,
        "title" : title
    }
    const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/chat/createChatRoom', {
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : JWT!

        },
        body : JSON.stringify(request)
    })

    if(response.ok) {
        const errMsg = await response.json();
        return new Error(errMsg || 'failed to fetch data')
    }

    return response.json();
}