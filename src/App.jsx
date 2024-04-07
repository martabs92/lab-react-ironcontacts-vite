import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";


function App() {
const [contacts, setContacts] = useState(contactsData.slice(0, 5));
const [otherContacts, setOtherContacts] = useState(contactsData.slice(5));

function addRandomContact() {
  if (otherContacts.length === 0) return;
  const randomIndex = Math.floor(Math.random() * otherContacts.length);
  const randomContact = otherContacts[randomIndex];

  setContacts(prevContacts => [...prevContacts, randomContact]);
  setOtherContacts(prevOtherContacts => {
    const updatedOtherContacts = [...prevOtherContacts];
    updatedOtherContacts.splice(randomIndex, 1);
    return updatedOtherContacts;
  });
}

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add a random contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} style={{ width: '70px', height: '100px' }} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : null}</td>
              <td>{contact.wonEmmy ? '🌟' : null}</td>
            </tr>
          ))}
        </tbody>



      </table>

    </div>
  );
}

export default App;
