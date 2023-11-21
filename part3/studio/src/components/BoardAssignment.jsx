import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
      label: "Sweet Recipes",
      value: "Put Sweet Recipes Here!"
      },
      {
      label: "Savory Recipes",
      value: "Put Savory Recipes Here!"
      },
      {
      label: "Spicy Recipes",
      value: "Put Spicy Recipes Here!"
      }
      ];

   const [boardName, setBoardName] = useState('no boards yet!');
   
   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{ paddingTop: "50px" }}>
        <label>Save to Board: </label>
        <select value={boardName} onChange={handleChange}>
          {boards.map((board) => (
            <option key={board.label} value={board.label}>
              {board.label}
            </option>
          ))}
        </select>
  
        <p>Saved to {boardName}!</p>
      </div>
   );
}
