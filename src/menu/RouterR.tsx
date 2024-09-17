import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import { Home } from "../components/Home"
import { Busqueda } from "../components/Busqueda"
import { Filtros } from "../components/SeccionFiltros/Filtros"
import { Perfil } from "../components/Perfil"
import { ErrorComponent } from "../components/ErrorComponent"
import { Menu } from "./Menu"
import { RespuestaFiltros } from "../components/SeccionFiltros/RespuestaFiltros"

export const RouterR = () => {
    return(
        <Router>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/busqueda" element={<Busqueda/>}/>
                <Route path="/filtros" element={<Filtros/>}/>
                <Route path="/respuestafiltros/:presupuesto/:wifi/:parqueadero/:lavanderia/:piscina/:gimnasio/:vigilancia/:disposicion/:transporte" element={<RespuestaFiltros/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="*" element={<ErrorComponent/>}/>
            </Routes>
        </Router>
    )
}