import { useState } from 'react'
import styles from './App.module.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'
function App() {
  const [calValue, setCalValue] = useState('')
  const onButtonClick = (buttonText) =>{
    if(buttonText === 'c'){
      setCalValue('')
    }else if(buttonText === '='){
      const result = eval(calValue) //eval evaluates mathamatical expression
      setCalValue(result)
    }else{
      const newDisplayValue = calValue + buttonText
      setCalValue(newDisplayValue)
    }
  }

  return (
    <center>
    <div className={styles.clauclator}>
      <Display displayValue={calValue} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
    </center>
  )
}

export default App
