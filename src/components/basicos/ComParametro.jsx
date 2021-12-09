import React from "react";

export default function ComParametro(props) {
  console.log(props);

  // recebe parametro em props.nota e armazena novaNota
  const novaNota = Math.ceil(props.nota);

  // props.nota = 50 //------> uma prropriedade e somente leitura

  // TODO criar novas regras
  const status = props.nota >= 8 ? "Passou direto" : "Recuperação";

  return (
    // FIXME Ajustar essa div
    <div>
      {props.aluno} em {props.disciplina} tem nota: {props.nota} +- {novaNota}
      <h1>{status}</h1>
    </div>
  );
}
