import { useParams } from "react-router-dom";
import { Option } from "../../models/Option";


interface filtrosProps {
    [presupuesto: string]:string;
    wifi: string;
    parqueadero: string;
    lavanderia: string;
    piscina: string;
    gimnasio: string;
    vigilancia: string;
    disposicion: string;
    transporte: string;
}

export const RespuestaFiltros = () =>{
    const { presupuesto, wifi, parqueadero, lavanderia, piscina, gimnasio, vigilancia, disposicion, transporte} = useParams<filtrosProps>();
    if(0>Number(presupuesto)){

    }
    return(
       <>
       </>
    )
}