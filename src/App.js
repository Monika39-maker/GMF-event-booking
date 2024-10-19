//import bookEvents.js component
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookEvent from './Components/bookEvent' 
import AdminLogin from './Components/adminLogin';
import AdminView from './Components/adminView';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BookEvent />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-view" element={<AdminView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
