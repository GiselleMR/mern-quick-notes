import { useState } from "react";

export default function NewNotePage() {
  const [note, setNote] = useState('');

  return (
    <>
      <h1>New Note</h1>
      <form action="">
        <label htmlFor="text">Text:
          <input type="text" name="text" id="text" />
        </label>
        <input type="submit" value="add note" />
      </form>
    </>
  );
}