import { BrowserRouter, Routes, Route } from "react-router";
import LayoutDash from "./features/LayoutDash";
import Dashboard from "./features/Dashboard/Dashboard";
import Groups from "./features/Groups/Groups";
import Enrollments from "./features/Enrollments/Enrollments";
import Staff from "./features/Staff/Staff";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/**Empezamos a desarrollar con dashboard, posteriormente se agrega el login */}
        <Route path="/" element={<LayoutDash />}>
          <Route index element={<Dashboard />} />
          <Route path="groups" element={<Groups />} />
          <Route path="enrollments" element={<Enrollments />} />
          <Route path="staff" element={<Staff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
