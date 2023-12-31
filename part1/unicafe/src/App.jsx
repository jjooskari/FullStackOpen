import { useState } from 'react'

const Button = ({ state, setState, text }) => {
  const onClick = () => {setState(state + 1)}
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

// Return a line to the html table
const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all * 100).toFixed(1) + "%"
  return (
    <>
      <h1>Statistics</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        // Html table
        <>
          <table>
            <tbody>
              <StatisticsLine text="good" value={good}/>
              <StatisticsLine text="neutral" value={neutral}/>
              <StatisticsLine text="bad" value={bad}/>
              <StatisticsLine text="all" value={all}/>
              <StatisticsLine text="average" value={average}/>
              <StatisticsLine text="positive" value={positive}/>
            </tbody>
          </table>
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