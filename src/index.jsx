import ReactDom from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

const conteudo = <p>Meu conteúdo maravilhoso!</p>
//const el = document.getElementById('root') // ----> pode colocar elemento dentro de euma constante

ReactDom.render(
        <div id="app">
            
            Olá <strong>React</strong>!!!!<br/>
            {conteudo}
            Com JSX<br/>
            
            <Primeiro></Primeiro>
            
            <ComParametro 
            aluno="Alex" 
            disciplina="Bacanas"
            nota={7.2}/>

            <ComParametro 
            aluno="Maria" 
            disciplina="Maravilha"
            nota={9.9}/>

            <Fragmento />            
        </div>, document.getElementById('root') //el // ---> usar a constante como parametro
)
