import "./App.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Page from "./routes/Home";
import { Login } from "./routes/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Layout from "./components/Layout";
import Scheduling from "./routes/Scheduler/services/Scheduling";

export default function App() {
  return (
    <BrowserRouter>
    <Layout>
      <main className="container content">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Page />} />

          <Route element={<ProtectedRoute />}>
           <Route path="turns" element= {<Scheduling/>}/>
          </Route>
 
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
      </Layout>
    </BrowserRouter>
  );
}
