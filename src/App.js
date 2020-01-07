import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from './components/ContactCard';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div >
          <ContactCard name="Jimmy" number="347-486-2367" email="jimmy@gmail.com" work="718-375-2849"/>
          <ContactCard name="Bob" number="347-327-2247" email="bob@gmail.com" work="917-384-2864"/>
          <ContactCard name="Jimmy" number="347-486-2367" email="jimmy@gmail.com"/>
        </div>

        <Counter number={4}/>
      </header>
    </div>
  );
}

export default App;
