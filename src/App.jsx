import React from "react";
import Radio from "./Form/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
  {
    pergunta: 'Qual é o propósito do método "render" em um componente React?',
    options: [
      "Para inicializar o estado do componente.",
      "Para exibir o componente na interface do usuário.",
      "Para ouvir eventos DOM.",
    ],
    resposta: "Para exibir o componente na interface do usuário.",
    id: "p5",
  },
  {
    pergunta: "O que é JSX em React?",
    options: [
      "É uma biblioteca para gerenciamento de estado.",
      "É uma sintaxe de extensão de JavaScript que permite escrever HTML em seu código JavaScript.",
      "É uma ferramenta para compilar código JavaScript.",
    ],
    resposta:
      "É uma sintaxe de extensão de JavaScript que permite escrever HTML em seu código JavaScript.",
    id: "p6",
  },
  {
    pergunta: "O que é o state em React?",
    options: [
      "É uma maneira de armazenar as propriedades que pertencem ao componente pai.",
      "É uma maneira de armazenar valores mutáveis que podem afetar o que é renderizado no componente.",
      "É uma biblioteca para gerenciar o estado da aplicação.",
    ],
    resposta:
      "É uma maneira de armazenar valores mutáveis que podem afetar o que é renderizado no componente.",
    id: "p7",
  },
  {
    pergunta: "O que o props permite que você faça em React?",
    options: [
      "Permite que você acesse os métodos do ciclo de vida do componente.",
      "Permite que você passe dados de um componente para outro.",
      "Permite que você altere o estado do componente.",
    ],
    resposta: "Permite que você passe dados de um componente para outro.",
    id: "p8",
  },
  {
    pergunta: "O que é um componente funcional em React?",
    options: [
      "É um componente que pode alterar seu próprio estado.",
      "É um componente que não pode ter estado e é escrito como uma função JavaScript.",
      "É um componente que pode conter outros componentes.",
    ],
    resposta:
      "É um componente que não pode ter estado e é escrito como uma função JavaScript.",
    id: "p9",
  },
  {
    pergunta: "O que é um Hook em React?",
    options: [
      "É uma função que permite que você use o estado e outras características do React sem escrever uma classe.",
      "É uma propriedade que permite que você altere o estado de um componente.",
      "É uma função que permite que você execute efeitos colaterais em seus componentes.",
    ],
    resposta:
      "É uma função que permite que você use o estado e outras características do React sem escrever uma classe.",
    id: "p10",
  },
];

function App() {
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: "",
    p9: "",
    p10: "",
  });

  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);
  const [resultadoIncorreto, setResultadoIncorreto] = React.useState(null);
  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
    console.log(target);
  }
  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    const incorretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] !== resposta
    );
    const respostasIncorretas = incorretas.map(({ pergunta }) => pergunta);
    setResultado(
      "Você acertou " + corretas.length + " de " + perguntas.length + "!"
    );
    setResultadoIncorreto(respostasIncorretas);
    console.log(corretas);
  }
  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          key={pergunta.id}
          active={slide === index}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <>
          <h1>{resultado}</h1>
          {resultadoIncorreto.length > 0 && (
            <>
              <h3>Você errou essa(s) pergunta(s):</h3>
              <ul>
                <li>
                  {resultadoIncorreto.map((pergunta, index) => (
                    <p key={index}>{pergunta}</p>
                  ))}
                </li>
              </ul>
            </>
          )}
        </>
      ) : (
        <button onClick={handleClick}>Próxima</button>
      )}
    </form>
  );
}

export default App;
