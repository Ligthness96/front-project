import React, {useState} from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [character, setCharacter] = useState('+')
  const [answer, setAnswer] = useState(0)

  return (
    <>
    <div className='App'>
      <label htmlFor="number1">Число 1:</label>
      <input type="text" id="number1" onChange={(event) => setNumber1(Number(event.target.value))}/>
      <label htmlFor="character">Знак:</label>
      <select name="character" id="character" onChange={(event) => setCharacter(event.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="/">/</option>
        <option value="*">*</option>
      </select>
      <label htmlFor="number2">Число 2:</label>
      <input type="text" id="number2" onChange={(event) => setNumber2(Number(event.target.value))}/>
      <label htmlFor="answer">Ответ:</label>
      <input type="text" id="otvet" value={answer}/>
      <button type="button" className='get-answer-btn' onClick={() => {
        switch(character) {
          case '+':
            setAnswer(number1+number2)
            break;
          case '-':
            setAnswer(number1-number2)
            break;
          case '*':
            setAnswer(number1*number2)
            break;
          case '/':
            setAnswer(number1/number2)
            break;
        }
      }}>Посчитать</button>
    </div>
    <div className="fon"></div>
    </>
    
  );
}

export default App;
