import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "./pages/Test/Test";
import Result from "./pages/Result/Result";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Test />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
