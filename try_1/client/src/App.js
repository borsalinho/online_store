import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/appRouter';
import NavBar from './components/navBar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App;
