
import { useState, useEffect } from 'react';

// Variable define  outside custom hooks
// Will share data between all files that import from it
// Share logic and data by managing the data outside off the hook because that off the hook it would not be shared.
// It would be exclusive to each component.
// Each component would get its own data but managing it outside of the hook every file that imports this
// file or something from that file gets the same shared data.
let = globalState = {};
let listeners = [];
let actions = {};

//Name of custom hooks
const useStore = () => {
    const setState = useState(globalState)[1];

    useEffect(() => {
        // adding a set state function to our listeners for a component that uses my custom hook  when that component mounts
        listeners.push(setState);

        //removing it when it unmount
        return () => {
            listeners = listeners.filter(li => li !== setState);
        }
    }, [setState]);
}