const { SAVE_COMMENT } = require("actions/types");

export function saveComment(comment){
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}
