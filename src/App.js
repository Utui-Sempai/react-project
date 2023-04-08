import { BrowserRouter,Route, Routes } from "react-router-dom";
import Contacto from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Company";
import Projecto from "./components/pages/Projecto";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
    return(
        <div className="App">
            
                <BrowserRouter>
                    <Navbar/>
                    <Container customClass="min-height">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/Contacto" element={<Contacto/>}/>
                        <Route exact path="/Empresa" element={<Empresa/>}/>
                        <Route exact path="/Projecto" element={<Projecto/>}/>
                    </Routes>
                    </Container>
                    <Footer/>
                </BrowserRouter>
                
        </div>
    )
}
export default App