import { useState } from "react";
import { Option } from "../../models/Option";
import { useNavigate } from "react-router-dom";

export const Filtros = () => {
    const [sliderValue, setSliderValue] = useState<number>(0);
      
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(event.target.value));
    };

    const [options, setOptions] = useState<Option[]>([
        { id: 1, label: 'Wifi', checked: false },
        { id: 2, label: 'Parqueadero', checked: false },
        { id: 3, label: 'Lavanderia', checked: false },
        { id: 4, label: 'Piscina', checked: false },
        { id: 5, label: 'Gimnasio', checked: false },
        { id: 6, label: 'Vigilancia', checked: false },
      ]);
    
    // Manejar el cambio de estado del checkbox
    const handleCheckboxChange = (id: number) => {
        setOptions(prevOptions =>
        prevOptions.map(option =>
            option.id === id ? { ...option, checked: !option.checked } : option
        )
        );
    };

    const [selectedOption, setSelectedOption] = useState<string>('1Habitación');

    // Maneja el cambio de selección
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const [selectedTransporte, setSelectedTransporte] = useState<string>('EAFIT');

    // Maneja el cambio de selección
    const handleSelectTransporteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTransporte(event.target.value);
    };

    const navigate = useNavigate();

    const goToRespuesta = () => {
        
        // Redirigir a la ruta con los parámetros en la URL
        navigate(`/respuestafiltros/${sliderValue.toString()}/${String(options[0].checked)}/${String(options[1].checked)}/${String(options[2].checked)}/${String(options[3].checked)}/${String(options[4].checked)}/${String(options[5].checked)}/${selectedOption}/${selectedTransporte}`);
    };

    return (
        <div className="mt-6 w-full h-full mx-0">
            <div className="w-full bg-slate-200 h-20">
                <h1 className="md:text-5xl text-2xl text-left  ">Filtra según tu necesidad</h1>
            </div>
            <h2 className="md:text-3xl text-xl text-left">Selecciona tu presupuesto</h2>
            <div className="flex space-x-8 items-center justify-center">
                <input
                    type="range"
                    min="0"
                    max="5000000"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="w-64 h-2 bg-gray-900 rounded-lg appearance-none cursor-pointer"
                />
                <label className="mb-4 text-xl font-semibold">
                    $: <span>{sliderValue}</span>
                </label>
            </div>
            <h2 className="md:text-3xl text-xl text-left">¿Cuales son tus necesidades?</h2>
            <div className="flex  items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                    {options.map(option => (
                    <label key={option.id} className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            checked={option.checked}
                            onChange={() => handleCheckboxChange(option.id)}
                            className="w-4 h-4  focus:ring-blue-500"
                        />
                        <span className="text-lg">{option.label}</span>
                    </label>
                    ))}
                </div>
            </div>
            <h2 className="md:text-3xl text-xl text-left">Disposición</h2>
            <div className="flex flex-col items-center justify-center">
                <label htmlFor="selector" className="mb-4 text-xl font-semibold">
                    Selección actual: {selectedOption}
                </label>
                <select
                    id="selector"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg">
                    <option value="1Habitación">1 habitación</option>
                    <option value="2-3Habitaciones">2-3 habitaciones</option>
                    <option value="+3Habitaciones">+3 habitaciones</option>
                </select>
            </div>
            <h2 className="md:text-3xl text-xl text-left">Filtrar por transporte</h2>
            <div className="flex flex-col items-center justify-center">
                <label htmlFor="selector" className="mb-4 text-xl font-semibold">
                    Selección actual: {selectedTransporte}
                </label>
                <select
                    id="selectorTransporte"
                    value={selectedTransporte}
                    onChange={handleSelectTransporteChange}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg">
                    <option value="EAFIT">EAFIT</option>
                    <option value="EIA">EIA</option>
                    <option value="UPB">UPB</option>
                </select>
            </div>
            <button
                onClick={goToRespuesta}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            </button>
        </div>
    )
}