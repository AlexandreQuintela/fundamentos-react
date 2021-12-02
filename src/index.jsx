import ReactDom from 'react-dom'
import React from 'react'
import './index.css'

const conteudo = <p>Meu conteúdo maravilhoso!</p>
const el = document.getElementById('root')

ReactDom.render(
        <div>
            Olá <strong>React</strong>!!!!<br/>
            {conteudo}
            Com JSX</div>, el
)
