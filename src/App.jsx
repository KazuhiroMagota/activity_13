import { useState } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Counter from './Counter.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function App() {

  const [title, setTitle] = useState("Activity 13 - React Components, Props, and useState");
  const [copyright, setCopyright] = useState("©copyright 2023 | All rights reserved.");
  const [count, setCount] = useState(0);



return (
    <>
      <Header title={title} count={count} />
      <Counter count={count} setCount={setCount}/>
      <Footer copyright={copyright} />
    </>
    
)}
  

export default App
