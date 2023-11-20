import React from 'react';

let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  // Check if the rating is within the valid range (1-5)
  const rating = Math.min(Math.max(1, props.rating), 5);

  // Nested GiveRating component
  function GiveRating() {
    return <h3>{stars[rating - 1]}</h3>;
  }

  // Use ternary operator to conditionally render GiveRating or null
  return (
    <div>
      {rating >= 1 && rating <= 5 ? <GiveRating /> : null}
    </div>
  );
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
