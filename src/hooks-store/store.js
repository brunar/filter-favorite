
import { useState, useEffect } from 'react';

// Variable define  outside custom hooks
// Will share data between all files that import from it
// Share logic and data by managing the data outside off the hook because that off the hook it would not be shared.
// It would be exclusive to each component.
// Each component would get its own data but managing it outside of the hook every file that imports this
// file or something from that file gets the same shared data.
let globalState = {};
let listeners = [];
let actions = {};

//Name of custom hooks
export const useStore = (shouldListen = true) => {
    const setState = useState(globalState)[1];

    //Payload to bring another object, exemplo the id
    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);
        globalState = { ...globalState, ...newState };

        for (const listener of listeners) {
            listener(globalState);
        }
    }

    useEffect(() => {
        if (shouldListen) {
            // adding a set state function to our listeners for a component that uses my custom hook  when that component mounts
            listeners.push(setState);
        }

        //removing it when it unmount
        return () => {
            if (shouldListen) {
                listeners = listeners.filter(li => li !== setState);
            }
        }
    }, [setState, shouldListen]);

    return [globalState, dispatch]; //custom hook returns two things: local state and dispatch
}

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState };
    }
    actions = { ...actions, ...userActions };
}