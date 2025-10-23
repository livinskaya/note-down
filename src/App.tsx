import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { NewNote } from "./components/newnote";

function App() {
  return (
    <div className="m-4">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
