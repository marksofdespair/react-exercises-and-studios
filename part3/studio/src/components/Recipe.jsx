import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://buttermilkbysam.com/about/";
   let authorPhoto = "https://buttermilkbysam.com/wp-content/uploads/2023/07/sam-baking-18.webp";
   let authorName = "Sam";

   return (
      <div>
         <img src={authorPhoto} alt = "Image of recipe author, Sam" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Poppy seeds", "All Purpose Flour", "Milk", "Butter", "Yeast"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Poppy-Seed Pullapart Bread</h1>
            <p>Lemony, poppy-seed bread that can be pulled apart in layers. Buttery and soft.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://buttermilkbysam.com/wp-content/uploads/2020/01/pullapart-poppy-bread-1229x1536.webp" alt="Browned, crunchy looking bread studded with poppyseeds" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
