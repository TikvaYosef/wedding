import React from 'react';
import { Confirmation } from '../Confirmation/Confirmation';
import { Invitation } from '../Invitation/Invitation';
import "./Guest.css";


export const Guest = () => {
    return (
        <div  >

            <div className='all'>


                <div className='about'>
                    <h1 className='bigTitle'>תקווה & יעקב</h1>
                    <h2 className='littelTitle'>מתחתנים</h2>
                </div>

                <div className='slider'>

                    <img className='picSlider' src="/pic1.jpeg" alt="fhj" />
                    <img className='picSlider' src="/pic2.jpeg" alt="fhj" />
                    <img className='picSlider' src="/pic3.jpeg" alt="fhj" />
                    <img className='picSlider' src="/pic7.jpeg" alt="fhj" />
                    <img className='picSlider' src="/pic6.jpeg" alt="fhj" />


                </div>
            </div>
            <hr></hr>
            <br></br>
            <div className='abuotTheWedding'>
                <h4>אנו שמחים ונרגשים להזמין אתכם לחגוג עמנו את יום נישואינו </h4>
                <h4>יום חמישי - כ"ח אב התשפ"ב</h4>
                <h2>25.08.2022</h2>
            </div>
            <h3>בלאג'יו</h3>
            <div className='aboutThePlace'>
                <h3>ישראל וישינגרד 14, בת ים</h3>

            </div>
            <br></br>
            <Invitation />
            <Confirmation />

        </div>
    )
}
