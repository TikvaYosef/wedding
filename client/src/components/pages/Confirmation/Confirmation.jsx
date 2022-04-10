import React, { useState } from 'react';
import {AddGuest} from "../../Service/service"
import "./Confirmation.css";

export const Confirmation = () => {
    const [count, setCount] = useState(1);
    const Up = ()=>{
        if(count === 10){
            setCount(10)
        }
        else{
            setCount(count+1) 
        }
    }
    const Down = ()=>{
        if(count === 0){
            setCount(0)
        }
        else{
            setCount(count-1) 
        }
    }


    return (
        <div>
            <h1>אישורי הגעה</h1>
            <h2>נשמח לראותכם בין אורחינו</h2>
            <div>
                <input type="text" placeholder="שם פרטי" />
                <input type="text" placeholder="שם משפחה" />
                <input type="text" placeholder="טלפון" />
                <button onClick={()=>{AddGuest()}}>הוסף</button>

                <p>כמה אתם? {count}</p>
                <button onClick={() => Up()}>+</button>
                <button onClick={() => Down()}>-</button>

                


            </div>
        </div>
    )

}

