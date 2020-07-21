import React from 'react';
import './App.css';
import Card from './components/Card/Card';

const album1 = {
  author: 'J Balvin',
  album: 'Vibras',
  year: 2018,
  img: 'vibras.jpg'
};
const album2 = {
  author: 'Arctic Monkeys',
  album: 'Humbug',
  year: 2009,
  img: 'humbug.jpg'
};
const album3 = {
  author: 'White Lies',
  album: 'To Lose My Life',
  year: 2009,
  img: 'toLoseMyLife.jpg'
};
function App() {
  return (
    <div>
      <Card {...album1} />
      <Card {...album2} />
      <Card {...album3} />
    </div>
  );
}

export default App;
