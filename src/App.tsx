import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={<h1>Hello</h1>}/>
      <Route path='/new' element={<h1>new</h1>}/>
      <Route path='/:id' element={<Navigate to="/" />} >
        <Route index element={<h1>Show</h1>}/>
        <Route index element={<h1>Show</h1>}/>
      </Route>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    
  )
}

export default App
