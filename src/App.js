import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FileUploader from "./Components/fileUploader";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import NoPage from "./Components/NoPage";

import { KindeProvider } from "@kinde-oss/kinde-auth-react";

export default function App() {
  return (
    <BrowserRouter>
      <KindeProvider
        clientId="fb3de3eca4cc4c599741dfdd1b5f4649"
        domain="https://imagine.kinde.com"
        redirectUri="http://localhost:3000"
        logoutUri="http://localhost:3000"
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="upload" element={<FileUploader />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </KindeProvider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);