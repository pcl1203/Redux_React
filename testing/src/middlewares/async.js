import React from "react";
import promise from "redux-promise";

export default ({ dispatch }) => next => action => {
    // Check if action has promise on its payload props
    // wait to resolve it if existing
    // send action on the next middleware if not

    if (!action.payload || !action.payload.then) { // make sure that no async/await from the action creator function
        return next(action);
    } 

    // Wait for the promise to resolve
    // gets its data and then create a new action
    // with that data and dispatch it

    action.payload.then(function(response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
};
    

