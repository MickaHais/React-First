import { useState } from 'react'
import artwork from './assets/dragono.webp'

import Card from './components/Card.jsx'
import Config from './components/Config.jsx'


function App() {
  const [cost, setCost] = useState(2)
  const [name, setName] = useState("Jean-Luc")
  const [type, setType] = useState("Dev front")
  const [desc, setDesc] = useState("Push un bug sur le repo qui inflige 5 de santé mentale.")
  const [artwork, setArtwork] = useState(`https://media.discordapp.net/attachments/1090388235106144336/1243560798861791383/julien.oppliger_a_computer_science_student_that_sleep_in_course_cdb03cab-3097-4496-bbd0-8aca4b9c6448.png?ex=6651ebbe&is=66509a3e&hm=317f2485d358f5ab3b9a4d2efbf173c3069a5da28379d6865e52632afe84f443&=&format=webp&quality=lossless&width=628&height=628`)
  const [keywords, setKeywords] = useState({
    'dégât': true,
    'soin': false,
    'pioche': false,
    'passe un tour': true
  })


  const costChangeHandler = (event) => {
    const value = Number(event.target.value)
    if(value < 0) {
      throw new Error(`Le coût ne peut pas être négatif`)
    }

    setCost(value)
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  const typeChangeHandler = (event) => {
    setType(event.target.value)
  }

  const descChangeHandler = (event) => {
    setDesc(event.target.value)
  }

  const artworkChangeHandler = (url) => {
    setArtwork(url)
  }

  const keywordsChangeHandler = (keyword, value) => {

    const newKeywords = { ...keywords }
    newKeywords[keyword] = value

    setKeywords(newKeywords)
  }


  return (
    <div className="app">

      <Card
        name={name}
        cost={cost}
        artwork={artwork}
        type={type}
        effect={desc}
        keywords={keywords} />

      <Config
        name={name}
        cost={cost}
        artwork={artwork}
        type={type}
        effect={desc}
        keywords={keywords}
        onCostChange={costChangeHandler}
        onNameChange={nameChangeHandler}
        onDescChange={descChangeHandler}
        onArtworkChange={artworkChangeHandler}
        onTypeChange={typeChangeHandler}
        onKeywordsChange={keywordsChangeHandler}
      />

    </div>
  )
}

export default App
