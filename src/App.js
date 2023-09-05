import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Emaillist from './Emaillist';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Emaillist />
      </div>
    </div>
  );
}

export default App;
