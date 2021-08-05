import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items=[
    {
        title :'What is react?',
        content : 'React is a front end framework'
    },
    {
        title : 'Why use React?',
        content : ' It is a favourite among engineers'
    },
    {
        title : 'How do you use React?',
        content : 'By creating components'
    }

];

const options = [
    {
        label: 'The Colour Red',
        value: 'red'
    },
    {
        label: 'The Colour Green',
        value: 'green'
    },
    {
        label: 'The Colour Blue',
        value: 'blue'
    }
];
  
  const App = () => {
      const[selected, setSelected] =useState(options[0]);
    return (
      <div>
          <Header/>
        <Route path = "/">
            <Accordion items ={items}/>
        </Route>
        <Route path="/list">
            <Search/>
        </Route>
        <Route path ="/dropdown">
            <Dropdown label=  "Selector a colour"
            options={options}
            selected = {selected}
            onSelectedChange = {setSelected}/>
        </Route>
        <Route path ="/translate">
            <Translate/>
        </Route>
      </div>
    );
  };
  export default App;
  
