import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddEvent from "./pages/AddEvent";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/events" element={<Events />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/add-event" element={<AddEvent />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>

  );

}


export default App;