//import bookEvents.js component
import React from 'react';
import BookEvent from './Components/bookEvent' 
import AdminLogin from './Components/adminLogin';
import AdminView from './Components/adminView';
const App = () => {
  return (
    <div className="App">
      <BookEvent />
      <AdminLogin />
      <AdminView />
    </div>
  );
}

export default App;
