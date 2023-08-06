export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}


function Logo() {
  return (
    <h2 >🌴  Travel Buddy 🧳</h2>
  )

}

function Form() {
  return (
    <div className="add-form">
      <h3>Trips accessories 😍</h3>
    </div>
  )
}

function PackingList() {
  return (
    <div className="list">
      List
    </div>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>You've X items on your list, and already packed X (X%)</em>
    </footer>
  )
}