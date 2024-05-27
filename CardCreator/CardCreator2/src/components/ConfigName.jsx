function ConfigName({value, onChange}) {
  return (
    <input className="config-name" type="text"  placeholder="Nom de la carte" value={value} onChange={onChange}/>
  )
}

export default ConfigName
