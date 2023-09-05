import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Emaillist from './Emaillist';
import Compose from './Compose';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Emaillist />
      </div>

      <Compose/>
    </div>
  );
}

export default App;
