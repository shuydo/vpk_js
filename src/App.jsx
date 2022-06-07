// import React from 'react';
import React, { useContext } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import './App.css';
import Loader from './components/Loader';
import Context from './utils/context';

const App = () => {
  const { auth } = useContext(Context);
  const { loading } = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      {/* <h1>fghjk</h1> */}
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
