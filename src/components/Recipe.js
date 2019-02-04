import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = '674afcba83148cd59b3aed618ff5d9ee';

class Recipe extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );

    const res = await req.json();
    //console.log(res.resipes[0]);
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  };

  render() {
    //console.log(this.props);
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:{' '}
              <span>
                <a href={recipe.source_url} />
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Back to Search</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
