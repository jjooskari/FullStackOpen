import { useState } from 'react'

const Button = ({ state, setState, text }) => {
  const onClick = () => {setState(state + 1)}
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100 + " %"
  return (
    <>
      <h1>Statistics</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {all}</p>
          <p>average {average}</p>
          <p>positive {positive}</p>
        </>
      )}
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button state={good} setState={setGood} text="good"/>
      <Button state={neutral} setState={setNeutral} text="neutral"/>
      <Button state={bad} setState={setBad} text="bad"/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App