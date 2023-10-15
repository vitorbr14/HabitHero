import { createContext, useState, useEffect } from "react";

export const LocalContext = createContext()

export const UserNameProvider = ({children}) => {

    const [localStorageData, setlocalStorageData] = useState([]);

    
   useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('key'));
    
      setlocalStorageData(localData);
    
   
     
   }, [])
   
  
    
    return (
        <LocalContext.Provider value={{localStorageData, setlocalStorageData}}>
            {children}
        </LocalContext.Provider>
    )
}