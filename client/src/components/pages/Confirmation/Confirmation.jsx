import React, { useRef, useState } from 'react';
import { AddGuest } from "../../Service/service"
import "./Confirmation.css";





export const Confirmation = () => {
    const [count, setCount] = useState(1);
    const [addItem, setAddItem] = useState({})
    const [isChecked, setIsChecked] = useState(false);
    const [isNotChecked, setIsNotChecked] = useState(true);



    const handleOnTrueChange = () => {
        setIsChecked(!isChecked);
        console.log(!isChecked)
    };
    const handleOnFalseChange = () => {
        setIsNotChecked(!isNotChecked);
        console.log(!isNotChecked)
    }



    const Up = () => {
        if (count === 13) {
            setCount(13)
        }
        else {
            setCount(count + 1)
        }
    }
    const Down = () => {
        if (count === 0) {
            setCount(0)
        }
        else {
            setCount(count - 1)
        }
    }
    const Add = (event) => {
        // event.preventDefault();
        setAddItem({ ...addItem });
        AddGuest(addItem)
            .then((res) => { console.log(res); })
    };
    const handleAddOnChange = (event) => {
        addItem[event.target.name] = event.target.value;
    }

    return (
        <div>
            <h1>אישורי הגעה</h1>
            <h2>נשמח לראותכם בין אורחינו</h2>
            <div>
                <form className='form' >
                    <div className='fullname'>
                        <input className='input' required type="text" placeholder="טלפון" name='phone' onChange={handleAddOnChange} />
                        <input className='input' required type="text" placeholder="שם משפחה" name='lastName' onChange={handleAddOnChange} />
                        <input className='input' required type="text" placeholder="שם פרטי" name='firstName' onChange={handleAddOnChange} />
                    </div>

                    {/* <p>?כמה אתם</p> */}
                    {/* <button onClick={Up}>+</button> */}
                    <input className='inputamount' required type="text" placeholder="?כמה אתם" name='amount' onChange={handleAddOnChange} />
                    {/* <button onClick={Down}>-</button> */}

                    {/* <div className='buttons'>
                        <button className='isarriveBtn' name='isarrive' 
                            onClick={handleAddOnChange} value="false" ><span className='arriveText'>לא מגיעים</span><img className='emojiPic' src="data:image/png;base64,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" /> </button>
                        <button className='isarriveBtn' name='isarrive' 
                            onClick={handleAddOnChange} value="true" ><span className='arriveText'>מגיעים</span><img className='emojiPic' src="https://icon-library.com/images/emoji-icon-png/emoji-icon-png-20.jpg" /> </button>
                    </div> */}

                    <div className='buttons'>
                         <p className='arrivetext'>מגיעים</p>
                        <input type="checkbox" className='isarriveBtn' name='isarrive' onClick={handleAddOnChange} value="true"  />
                        <p className='arrivetext'>לא מגיעים</p>
                        <input type="checkbox" className='isarriveBtn' name='isarrive' onClick={handleAddOnChange} value="false" />
                    </div>

                    <button className='addBtn' onClick={Add} >הוסף</button>

                </form>
            </div>
        </div>
    )

}

