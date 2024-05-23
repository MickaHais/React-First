import Card from './components/Card.jsx'
import artwork from './assets/dragono.webp'
import { useState } from 'react'
import Config from './components/config.jsx'

function App() {

  const [cost, setCost] = useState(2)

  const cardDetails = {
    name: 'Dracopop',
    cost: 2,
    artwork: artwork,
    type: 'Dragon',
    effect: 'Lance une boule dracopesque',
    keywords: ['dégâts']
  }

  const costChangeHandler = (newCost) => {
    setCost(newCost)
  }

  const [name, setName] = useState('')

  const nameChangeHandler = (newName) => {
    setName(newName)
  }

  const [type, setType] = useState('')

  const typeChangeHandler = (newType) => {
    setType(newType)
  }

  const [effect, setEffect] = useState('')

  const effectChangeHandler = (newEffect) => {
    setEffect(newEffect)
  }

  return (
    <div className="app">
      <Card
        name={name || cardDetails.name}
        cost={cost}
        artwork={cardDetails.artwork}
        type={type || cardDetails.type}
        effect={effect || cardDetails.effect}
        keywords={cardDetails.keywords} />

      <Config
        onCostChange={costChangeHandler}
        onNameChange={nameChangeHandler}
        onTypeChange={typeChangeHandler}
        onEffectChange={effectChangeHandler} />
    </div>
  )
}

export default App
