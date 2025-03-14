import { createContext, useContext, useState } from "react";
import packages from "./Data";

export const ItemContext = createContext()

export function ItemProvider({children}){
     
    const [search,setSearch] =useState("")
    const [items,setItems] = useState(packages)
    const [searchItems,setSearchItems] = useState([])

    const handleInput =(e)=>{
        setSearch(e.target.value)
        const filterItems = items.filter((i)=>i.name.toLowerCase().includes(search.toLowerCase()))
          setSearchItems(filterItems)
    }


    console.log(searchItems)




    return(
        <ItemContext.Provider value={{handleInput,searchItems,search}}>
            {children}
        </ItemContext.Provider>
    )
}

export const useItems = ()=>{
    return useContext(ItemContext)
}