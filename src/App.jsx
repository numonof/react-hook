import React from 'react';
import './App.css';

function App() {
const [ firstNumber, setFirstNumber] = React.useState()
const [secondNumber, setSecondNumber] = React.useState()
const [mathOperation, setMathOperation] = React.useState('+')
// const [state, setState] = React.useState('ishlar yaxshimi?')

const calculation = (_firstNumber, _secondNamber, _mathOperation) => {
  if (_mathOperation === '+') {
   return  _firstNumber + _secondNamber
  }
  if (_mathOperation === '-') {
   return  _firstNumber - _secondNamber
  }
  if (_mathOperation === '*') {
   return  _firstNumber * _secondNamber
  }
  if (_mathOperation === '/') {
   return  _firstNumber / _secondNamber
  }
}

return (
<div className="App">
  <label>
    First number:
  <input type="text" className='input' onChange={(evt)=> setFirstNumber( Number(evt.target.value))
  } />
  </label>
  <select>
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
  </select>
   <label>
     Second number:
  <input type="text" className='input' onChange={(evt)=> setSecondNumber( Number(evt.target.value))
  } />
  </label>
  <br />
  <br />
  <br />
  <strong>{firstNumber}</strong><strong>{mathOperation}</strong>  <strong>{secondNumber}</strong> ={
    calculation(firstNumber, secondNumber, mathOperation)
  }
</div>
);
}

export default App;