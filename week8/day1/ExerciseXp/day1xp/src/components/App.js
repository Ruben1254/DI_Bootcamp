import React from 'react'
import Animals from './UserFavoriteColors'
import Exercise4 from './Exercise4'

const first = React.createElement('h1', {}, 'I do not use JSX')

const myelement = <h1>I Love JSX</h1>

const sum = 5 + 5 
const sentence = <p>React is {sum} times better with JSX</p>

const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div >
      {first}
      <h1>Hello World!</h1> 
      {myelement}
      {sentence}
      <h3>{user.first_name}</h3>
      <h3>{user.last_name}</h3>
      <Animals user={user} />
      <Exercise4 /> 
    </div>
  );
}

export default App;
