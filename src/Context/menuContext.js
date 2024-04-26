import { useState, createContext } from "react";

export const MenuContext = createContext ();

export const MenuStore = ({children}) => {

    const [openMenu, setOpenMenu] = useState(true);

    return(

        <MenuContext.Provider value ={{openMenu, setOpenMenu}}>
            {children}
        </MenuContext.Provider>

    )
}