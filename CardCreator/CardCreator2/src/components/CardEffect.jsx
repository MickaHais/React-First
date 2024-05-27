// [
//   [ 'degât', false ],
//   [ 'soin', false ],
//   [ 'pioche', false ],
// ]

function CardEffect({ description, keywords  }) {
  return (
    <div className="card-effect">
        <ul className="card-keywords">
          { Object.entries(keywords).map(([keyword, value], index) => (
            value && (
              <li key={index}>
                <span className="card-keyword">{keyword}</span>
              </li>
            )
          )) }
        </ul>
        <span className="card-description">{description}</span>
      </div>
  )
}

export default CardEffect
