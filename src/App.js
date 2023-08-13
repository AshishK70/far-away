import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAtItems(item) {
    setItems(items => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAtItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  )
}


function Logo() {
  return (
    <h2 >🌴  Travel Buddy 🧳</h2>
  )

}

function Form({ onAddItems }) {
  // working with controlled elemets  - 
  // 1) define a peice of state
  // 2) implement the state on element 
  // 3) update the value with state

  // creating a state for description/input field
  const [description, setDescription] = useState("");
  // creating a state for select field
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    // putting validation to check if description is empty to return
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() }
    console.log(newItem);

    onAddItems(newItem);

    // after form submittion reseting the values of select and input fields
    setDescription('');
    setQuantity(1)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Trips accessories 😍</h3>

      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
      </select>

      <input type="text" placeholder="Enter Items " value={description} onChange={(e) =>
        setDescription(e.target.value)
      }></input>
      <button>Add</button>
    </form>
  )
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul >
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
      <button>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>You've X items on your list, and already packed X (X%)</em>
    </footer>
  )
}