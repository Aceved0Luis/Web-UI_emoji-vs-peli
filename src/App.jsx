import { useState, useEffect } from 'react'

const movies = [
  { name: "Forrest Gump", emoji: "🏃🍫🍤" },
  { name: "The Matrix", emoji: "🕶️💊👽" },
  { name: "Titanic", emoji: "🚢❄️💔" },
  { name: "Jurassic Park", emoji: "🦖🌴🚙" },
  { name: "The Lion King", emoji: "🦁👑🌅" },
  { name: "Star Wars", emoji: "⚔️🚀🌌" },
  { name: "The Avengers", emoji: "🦸‍♂️🦸‍♀️💥" },
  { name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
  { name: "The Terminator", emoji: "🤖🔫🕶️" },
  { name: "Indiana Jones", emoji: "🤠🔍💎" },
  { name: "Back to the Future", emoji: "⏰🚗💥" },
  { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
  { name: "The Godfather", emoji: "🍕🤵🔫" },
  { name: "The Dark Knight", emoji: "🦇♞👨‍🦯" },
  { name: "Pulp Fiction", emoji: "🍔🔫🕶️" },
  { name: "Schindler's List", emoji: "📜🚂🔴" },
  { name: "The Lord of the Rings: The Return of the King", emoji: "🧝‍♂️🧙‍♂️🗡️" },
  { name: "The Silence of the Lambs", emoji: "🔇🐑🍖" },
  { name: "Fight Club", emoji: "👊💼🚽" },
  { name: "Inception", emoji: "🌀👩‍🚀🎩" },
  { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
  ];

  
function App() {

  function validar() {
    if(movie.name.toUpperCase() == inputValue.toUpperCase()) {
      setCount(count + 1);
      setInputValue("");
    }else{
      setLive(live - 1)
    }
  }
  
  const [count, setCount] = useState(0)
  const [live, setLive] = useState(3)
  const [movie, setMovie] = useState("")
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)]);
  },[count])

  return (
    <div className='container'>
      <h3 className='live'>live: {live}</h3>
      <h3 className='point'>Point: {count}</h3>
      <h1>Guess Movie</h1>
      <h2>{movie.emoji}</h2>
      <div className='form-response'>
        <input type="text" id="response" placeholder="Insert movie´s name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={validar}>Send</button>
      </div>
    </div>
  )
}

export default App
