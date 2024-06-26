import './style.css'
import React, { useState } from 'react';

export default function App() {
    console.log("renderizando App()...")
    let [numero, setNumero] = useState(0)
    const limiteMinimo = -100000;
    const limiteMaximo = 100000;

        if (numero < limiteMinimo) {
            numero = limiteMinimo;
        } 
        else
        if (numero > limiteMaximo) {
            numero = limiteMaximo;
        }

    function numeroaleatorio() {
        const numeroaleatorio = Math.floor(Math.random() * 200000) - 100000;
        setNumero(numeroaleatorio)
    }
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
            <button className='aleatorio' onClick={numeroaleatorio}>aleatório 1-100.000</button>
            <p>{numero}</p>
            <div className="botoes">
            <button className='negativos' onClick={menos10000}>-10000</button>
            <button className='negativos' onClick={menos1000}>-1000</button>
            <button className='negativos' onClick={menos100}>-100</button>
            <button className='negativos' onClick={menos10}>-10</button>
            <button className='negativos' onClick={menos1}>-1</button>
            <button className='positivos' onClick={mais1}>+1</button>
            <button className='positivos' onClick={mais10}>+10</button>
            <button className='positivos' onClick={mais100}>+100</button>
            <button className='positivos' onClick={mais1000}>+1000</button>
            <button className='positivos' onClick={mais10000}>+10000</button>
            </div>
            <button className='zerar' onClick={zerar}>zerar</button>
        </section>
    )
}