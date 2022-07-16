import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Savings from './Savings';


class App extends React.Component<any, any> {
  public render = (): React.ReactNode => {
    return(
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='savings' element={<Savings />}/>
      </Routes>
    </BrowserRouter>
    );
  }
}

export default App;
