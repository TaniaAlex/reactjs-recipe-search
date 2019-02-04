import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = '674afcba83148cd59b3aed618ff5d9ee';

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    //preven a webpage from refreshing completely
    e.preventDefault();
    //making an API call
    //some websites do not allow local server to access their data. To make website think that we are a legitimate website, hosted somewhere,just add a prefix https://cors-anywhere.herokuapp.com/ to your api url
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`
    );

    //console.log("Button is clicked. Searching for a recipe for a ", recipeName);
    //get data and convert to json format and store it in const data
    const data = await api_call.json();
    //check what data we are getting
    //console.log("Results for a search:", data.recipes);
    //console.log("Result for recipe id:", data.recipes[0].recipe_id);
    //to set result-data to state of array
    this.setState({ recipes: data.recipes });
    console.log('Current Search State:', this.state.recipes);
  };

  componentDidMount = () => {
    const json = localStorage.getItem('recipes');
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem('recipes', recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search with Food2Fork</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
