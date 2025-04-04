'use client'

import {  useState } from "react";

export default function TestComp() {
    const [name, setName] = useState('SARAAA');
    const [number, setNumber] = useState(0);

    const handleClick = () => {
        setName('Yahya');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(Number(e.target.value));
    }


    return (
        <>

            <div>
                <h1 className="font-sans text-3xl text-blue-900 font-black">{name} is Pagal!</h1>
            </div>

        <div className="flex gap-2 py-5 px-0">
            <button className="bg-blue-800 text-white p-3 rounded-lg hover:bg-blue-950"
                onClick={handleClick}>Change Name
            </button>

            <button className="bg-blue-800 text-white p-3 rounded-lg hover:bg-blue-950"
                onClick={() => setName('SARAAA')}>Reset Name
            </button>

         </div>

         <div>
                <h1 className="font-sans text-3xl text-blue-900 font-black">{number}</h1>
        </div>

         <input onChange={handleChange} name="number" value={number}
         type="number" className="border-2 border-blue-900 p-2 rounded-lg" placeholder="Enter a number" />




        </>)
}




