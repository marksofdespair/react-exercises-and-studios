import styles from './Description.module.css';
import React from 'react';

export function RecipeAuthor() {
    let authorName
    let authorPhoto
    let authorLink

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={"https://www.recipetineats.com/wp-content/uploads/2018/12/nagi.jpg?resize=183,183"} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>Nagi</h3>
              <a href={"https://www.recipetineats.com/thai-red-curry-with-chicken/"}>Recipetineats</a> 
           </div>
        </div>
     );
}