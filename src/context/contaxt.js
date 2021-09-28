import React ,{useState}from 'react';

export const SettingsContext = React.createContext();

export default function Settings(props) {
    const[itemsPerPage,setitemsPerPage]=useState(3)
    const[sort,setsort]=useState('Ascending')
    const[show,setShow]=useState(false)

    const state = {
        itemsPerPage,
        sort,
        show,
        setitemsPerPage,
        setsort,
        setShow



    }

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}