import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { casasData } from "../../database/CasasData";
import { Casa } from "../../models/Casa";

interface filtrosProps {
    [presupuesto:string]:string;
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
    const [casasComparar] = useState<Casa[]>(casasData);
    const [casasRespuesta, setCasasRespuesta] = useState<Casa[]>([]);
    let habitaciones = 0;
    useEffect(()=>{
        
        if(disposicion == "+3Habitaciones"){
            habitaciones = 10;
        }else if(disposicion == "2-3Habitaciones"){
            habitaciones = 3;
        }else{
            habitaciones = 1;    
        }
        for (let i = 0; i < casasComparar.length; i++) {
            if(casasComparar[i].precio<Number(presupuesto) && (casasComparar[i].wifi==(wifi==="true")
                || casasComparar[i].parqueadero==(parqueadero==="true") || casasComparar[i].lavanderia==(lavanderia==="true")
                || casasComparar[i].piscina==(piscina==="true") || casasComparar[i].gimnasio==(gimnasio==="true") 
                || casasComparar[i].vigilancia==(vigilancia==="true")) && casasComparar[i].numeroHabitaciones <= habitaciones
                && casasComparar[i].EAFIT==(transporte==="EAFIT") && casasComparar[i].EIA==(transporte==="EIA")
                && casasComparar[i].UPB==(transporte==="UPB")){
                console.log(casasComparar[i]);
                setCasasRespuesta(casasRespuesta=>[...casasRespuesta,casasComparar[i]])
                
               
            }
        }
       
    }, [presupuesto, wifi, parqueadero, lavanderia, piscina, gimnasio, vigilancia, disposicion, transporte]);
    
    if(casasRespuesta.length > 0){
        return(
            <>
                <div className="grid grid-cols-1 gap-4">
                    {casasRespuesta.map((casa) => (
                    <div key={casa.id} className="p-4 bg-white rounded shadow grid justify-items-stretch text-3xl">
                    {casa.nombre} Numero habitaciones: {casa.numeroHabitaciones} Precio Mes: {casa.precio} 
                </div>))}
                </div>
        </>
        )
    }else{
        return(
            <>
            <h1>No hay casas con esas caracteristicas</h1>
            </>
        )
    }
    
}