import React from 'react';

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
    const state = {
        list: [],
        incomplete: []
    }
    debugger
    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}