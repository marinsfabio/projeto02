import React from "react";
import './Main.css'

export function Main() {
    return (
        <div className="box-main">
            <div className="text-main">
                <h2>Destaques</h2>
                <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
            </div>
            <div className="air">
                <div className="air-box-1">
                    <img className='air-bot' src="air-1.png" alt="air-1" />
                    <img className='air-bot' src="air-2.png" alt="air-2" />
                    <img className='air-bot' src="air-3.png" alt="air-3" />
                    <img className='air-bot' src="air-4.png" alt="air-4" />
                </div>
                <div className="air-box-2">
                    <img className='air-bot' src="air-5.png" alt="air-5" />
                    <img className='air-bot' src="air-6.png" alt="air-6" />
                    <img className='air-bot' src="air-7.png" alt="air-7" />
                    <img className='air-bot' src="air-8.png" alt="air-8" />
                </div>
            </div>
        </div>
    )
}