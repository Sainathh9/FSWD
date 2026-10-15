import { useState } from 'react'
import './App.css'

function App() {
  const [options, setOptions] = useState([
    { id: 1, text: 'JavaScript', votes: 0 },
    { id: 2, text: 'Python', votes: 0 },
    { id: 3, text: 'Java', votes: 0 },
    { id: 4, text: 'C++', votes: 0 },
  ])

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0)

  const handleVote = (id) => {
    setOptions(
      options.map((opt) =>
        opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt
      )
    )
  }

  return (
    <div className="poll-container">
      <h2>What is your favorite programming language?</h2>
      {options.map((option) => {
        const percentage =
          totalVotes === 0 ? 0 : Math.round((option.votes / totalVotes) * 100)

        return (
          <div key={option.id} className="option">
            <button onClick={() => handleVote(option.id)}>
              {option.text}
            </button>
            <span>{option.votes} votes ({percentage}%)</span>
            <div className="bar">
              <div
                className="fill"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        )
      })}
      <p>Total Votes: {totalVotes}</p>
    </div>
  )
}

export default App
