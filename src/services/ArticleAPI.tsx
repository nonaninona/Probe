export async function callGetRecommendedArticles({userName} : {userName:string}) {
    const request = {
        username : userName
    }

    const JWT = localStorage.getItem("JWT");
    const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/article/getPreferredArticles', { 
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : JWT!
        },
        body: JSON.stringify(request)
    })

    if(!response.ok) {
        const errMsg = await response.json();
        return new Error(errMsg || 'failed to fetch data')
    }

    return response.json();
}

export async function callUpdateUserPreference({userName, articleId} : {userName:string, articleId:string}) {
    const request = {
        username : userName,
        articleId : articleId
    }

    const JWT = localStorage.getItem("JWT");
    const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/member/adjustUserPreferenceRequest', { 
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : JWT!
        },
        body : JSON.stringify(request)
    })

    if(!response.ok) {
        const errMsg = await response.json();
        return new Error(errMsg || 'failed to fetch data')
    }

    return response.json();
}

export async function callGetSimilarArticles({articleId} : {articleId:string}) {
    const request = {
        articleId : articleId
    }

    const JWT = localStorage.getItem("JWT");
    const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/article/getSimilarArticles', { 
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : JWT!
        },
        body : JSON.stringify(request)
    })

    if(!response.ok) {
        const errMsg = await response.json();
        return new Error(errMsg || 'failed to fetch data')
    }

    return response.json();
}

export async function callGetArticle({articleId} : {articleId:string}) {
    const request = {
        articleId : articleId
    }

    const JWT = localStorage.getItem("JWT");
    const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/article/getArticle', { 
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : JWT!
        },
        body : JSON.stringify(request)
    })

    if(!response.ok) {
        const errMsg = await response.json();
        return new Error(errMsg || 'failed to fetch data')
    }

    return response.json();
}