import { useState } from "react"

export default function Header(){

    const [state, setState] = useState('');
    
    return(
        <div className="w-full text-xl flex items-center">
            Hello Sara
            </div>
    )
}