import React from 'react';

//in stateless functional componen we can't use expretion 'this.props'. we need to pass props as an argument to func, so props can work as an object

// create a serch button
const Form = props => {
  return (
    <form onSubmit={props.getRecipe} style={{ marginBottom: '2rem' }}>
      {
        //set a 'name' attribute for a input so we can use it to read a input's value in App.js
      }
      <input className="form__input" type="text" name="recipeName" />
      <button className="form__button">Search</button>
    </form>
  );
};

export default Form;
