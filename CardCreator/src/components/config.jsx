import { useState } from 'react'

const Config = ({ onCostChange, onNameChange, onTypeChange, onEffectChange }) => {
    const [cost, setCost] = useState(2)

    const costChangeHandler = (event) => {
    let NewCost = Number(event.target.value)
    if (NewCost < 0){
        throw new Error(`Le coût ne peut être inférieur à 0`)
    }
    setCost(NewCost)
        onCostChange(NewCost)
    }

    const [name, setName] = useState('')

    const nameChange = (event) => {
        setName(event.target.value)
        onNameChange(event.target.value)
    }

    const [type, setType] = useState('')

    const typeChange = (event) => {
        setType(event.target.value)
        onTypeChange(event.target.value)
    }

    const [effect, setEffect] = useState('')

    const effectChange = (event) => {
        setEffect(event.target.value)
        onEffectChange(event.target.value)
    }

    return (
        <div className="config">
        <input type="number" value={cost} onChange={costChangeHandler} />
        <input type="text" placeholder='Nom de la carte' onChange={nameChange} />
        <select name="type" id="type" onChange={typeChange}>
            <option value="Dragon">Dragon</option>
            <option value="Hamster">Hamster</option>
            <option value="Chinchilla">Chinchilla</option>
        </select>
        <input type="text" placeholder="Description de l'effet" onChange={effectChange} />
        </div>
    )
}

export default Config