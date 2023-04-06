import { checkToken } from '../../utilities/users-service';
import { useState } from "react";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <h1>NotesPagePage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>

      <h3>No Notes Yet</h3>
    </>
    
  );
}