
import { useRef } from 'react'
import ConfigCost from './ConfigCost.jsx'
import ConfigName from './ConfigName.jsx'
import ConfigKeywords from './ConfigKeywords.jsx'

function Config({
  name,
  type,
  desc,
  cost,
  artwork,
  keywords,
  onCostChange,
  onDescChange,
  onNameChange,
  onTypeChange,
  onArtworkChange,
  onKeywordsChange
}) {

  const artworkRef = useRef(null)

  const artworkSubmitHandler = (event) => {

    onArtworkChange(artworkRef.current.value)
  }

  return (
    <form className="config box">
      <div className="config-line">
        <ConfigName value={name} onChange={onNameChange} />
        <ConfigCost value={cost} onChange={onCostChange} />
      </div>
      <div className="config-line">
        <input type="url" ref={artworkRef} className="config-artwork" placeholder="https://example.com/artwork.jpg" defaultValue="https://media.discordapp.net/attachments/1090388235106144336/1243560798861791383/julien.oppliger_a_computer_science_student_that_sleep_in_course_cdb03cab-3097-4496-bbd0-8aca4b9c6448.png?ex=6651ebbe&is=66509a3e&hm=317f2485d358f5ab3b9a4d2efbf173c3069a5da28379d6865e52632afe84f443&=&format=webp&quality=lossless&width=628&height=628" />
        <button type="button" onClick={artworkSubmitHandler}>ok</button>
      </div>
      <select className="config-type" value={type} onChange={onTypeChange} >
        <option>Dev front</option>
        <option>Dev back</option>
        <option>Sysadmin GNU+Linux</option>
        <option>Support Microsoft</option>
        <option>Mage noir</option>
      </select>
      <ConfigKeywords keywords={keywords} onChange={onKeywordsChange}/>
      <textarea className="config-description" placeholder="Description de l'effet" onChange={onDescChange}>
        {desc}
      </textarea>
    </form>

  )
}

export default Config
