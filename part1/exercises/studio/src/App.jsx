import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../'


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <div>
            <RecipeDescription />
          </div>
        </div>
      </div>
    );
  }
}

export default App;