function ConfigKeywords({ keywords, onChange }) {


  return (
    <ul className="config-keywords">
      { Object.entries(keywords).map(([keyword, value], index) => (
      <li className="config-item" key={index}>
        <label>
          <input type="checkbox" className="config-keyword" checked={value} onChange={(event) => onChange(keyword, event.target.checked)}/>
          <span>{ keyword }</span>
        </label>
      </li>
      )) }
    </ul>
  )
}

export default ConfigKeywords
