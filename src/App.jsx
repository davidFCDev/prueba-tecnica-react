import React, { useEffect, useState } from 'react'

const App = () => {
  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch('https://catfact.ninja/fact'
    ).then(response => response.json()
    ).then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}

export default App
