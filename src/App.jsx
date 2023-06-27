import React, { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red$json=true`

const App = () => {
  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT
    ).then(response => response.json()
    ).then(data => {
      const { fact } = data
      setFact(fact)

      const firstWord = fact.split(' ', 3)
      console.log(firstWord)
    })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}

export default App
