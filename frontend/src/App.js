import React from 'react';

import StudentListPage from './pages/studentList/studentList.comp'
import Header from './pages/header/header.comp';
import SearchPage from './pages/searchClient/searchClient.comp';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Route path="/" exact component={StudentListPage}/>
        <Route path="/search/:name?" exact component={SearchPage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
