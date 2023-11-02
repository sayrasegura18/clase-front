import React,{Fragment} from 'react';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import Index2 from './paginas/auth/index2';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/"exact element={<Index2/>}>
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;