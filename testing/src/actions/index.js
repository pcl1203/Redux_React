const { SAVE_COMMENT, FETCH_COMMENTS } = require("actions/types");

export function saveComment(comment){
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export async function fetchComments(){
    const comments = await fetch('http://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => {
            return json
        });
    return {
        type: FETCH_COMMENTS,
        payload: comments
    };
}
