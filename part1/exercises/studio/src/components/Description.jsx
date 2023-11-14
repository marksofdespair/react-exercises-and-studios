import styles from './Description.module.css';
import React from 'react';

export function RecipeAuthor() {
    let authorName
    let authorPhoto
    let authorLink

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}