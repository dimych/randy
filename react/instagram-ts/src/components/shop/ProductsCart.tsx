import { useState } from "react";

export const ProductsCart = () => {
    let [value, setValue] = useState(0);


    return <div>no items {value} 
    <button onClick = {() => {
        setValue(value-1)
    }}>decrease</button> 
    <button onClick={() => {
        setValue(value+1)
    }}>increase</button> </div>
}

