import React from 'react';
import { RecipeAuthor } from './components/Description'; 
import { RecipeIngredients } from './components/Ingredients';
import { RecipePhoto } from './components/Photos';

class App extends React.Component {
  render() {
    return (
      <div>
         <RecipePhoto />
          <div>
            <RecipeAuthor />
            <RecipeIngredients />
          </div>
        </div>
    );
  }
}

export default App;