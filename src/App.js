import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(""); // Estado para armazenar o valor digitado

  // Função para lidar com a digitação dos números e operadores
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Função para calcular o resultado
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // 'eval' vai avaliar a expressão matemática
    } catch (error) {
      setInput("Erro");
    }
  };

  // Função para limpar o display
  const handleClear = () => {
    setInput("");
  };

  // Função para lidar com a digitação do teclado
  const handleKeyDown = (event) => {
    const key = event.key;

    // Se pressionar as teclas numéricas ou operadores
    if (/^[0-9]$/.test(key)) {
      setInput((prevInput) => prevInput + key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      setInput((prevInput) => prevInput + key);
    } else if (key === "Enter") {
      handleCalculate();
    } else if (key === "Backspace") {
      setInput((prevInput) => prevInput.slice(0, -1)); // Remove o último caractere
    } else if (key === ".") {
      setInput((prevInput) => prevInput + ".");
    }
  };

  // Adiciona o ouvinte de eventos para o teclado
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // Limpa o ouvinte quando o componente for desmontado
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleClick("/")}>/</button>

          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
