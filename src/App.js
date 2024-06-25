import './style.css'
import React, { useState } from 'react';

export default function App() {
    console.log("renderizando App()...")
    let [numero, setNumero] = useState(0)

        function menos10000() {
            setNumero(numero - 10000)
            console.log(numero)
        }

        function menos1000() {
            setNumero(numero - 1000)
            console.log(numero)
        }
    
        function menos100() {
            setNumero(numero - 100)
            console.log(numero)
        }
    
        function menos10() {
            setNumero(numero - 10)
            console.log(numero)
        }
        
        function menos1() {
            setNumero(numero - 1)
            console.log(numero)
        }
        
        function mais1() {
            setNumero(numero + 1)
            console.log(numero)
        }

        function mais10() {
            setNumero(numero + 10)
            console.log(numero)
        }

        function mais100() {
            setNumero(numero + 100)
            console.log(numero)
        }

        function mais1000() {
            setNumero(numero + 1000)
            console.log(numero)
        }

        function mais10000() {
            setNumero(numero + 10000)
            console.log(numero)
        }

        function zerar() {
            setNumero(numero - numero)
        }

    return (
        <section>
            <h1>Contador</h1>
            <p>{numero}</p>
            <div class="botoes">
            <button onClick={menos10000}>-10000</button>
            <button onClick={menos1000}>-1000</button>
            <button onClick={menos100}>-100</button>
            <button onClick={menos10}>-10</button>
            <button onClick={menos1}>-1</button>
            <button onClick={mais1}>+1</button>
            <button onClick={mais10}>+10</button>
            <button onClick={mais100}>+100</button>
            <button onClick={mais1000}>+1000</button>
            <button onClick={mais10000}>+10000</button>
            </div>
            <button onClick={zerar}>zerar</button>
        </section>
    )
}