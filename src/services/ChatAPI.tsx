export async function callGetChatRoomListAPI({id}: {id: string}) {
    const request = {
        "username" : id,
    }
    const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/member/getAllChatRoomsResponse', {
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

export async function callGetChatListAPI({chatRoomId}: {chatRoomId: number}) {
    const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/chat/getAllChatsFromChatRoom/' + chatRoomId, {
        method : "GET"
    })

    if(response.ok) {
        const errMsg = await response.json();
        return new Error(errMsg || 'failed to fetch data')
    }

    return response.json();
}