import { Info, Play } from "lucide-react";
import { Link } from "react-router-dom";

export const InstructionsPage = () => {
    return (
        <div className="min-h-screen bg-[#EFF2F7] flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="h-2 bg-orange-500" />

                <div className="px-6 py-6">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Cómo Jugar</h2>

                    <div className="space-y-4 text-gray-700">
                        <div className="flex items-center space-x-3">
                            <Info size={20} className="text-orange-500" />
                            <p>Responde cada pregunta seleccionando una de las opciones disponibles.</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Info size={20} className="text-orange-500" />
                            <p>Tienes 20 segundos para responder cada pregunta.</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Info size={20} className="text-orange-500" />
                            <p>Si el tiempo se acaba, la pregunta se saltará automáticamente.</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Info size={20} className="text-orange-500" />
                            <p>Puedes omitir preguntas manualmente con el botón "Skip".</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Info size={20} className="text-orange-500" />
                            <p>Gana el juego si respondes correctamente 10 preguntas.</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 p-4 bg-gray-50 flex justify-center">
                    <Link to="/quiz" className="flex items-center space-x-2 px-6 py-3 rounded-full bg-orange-500 text-white shadow-md hover:bg-orange-600 transition-colors cursor-pointer">
                        <Play size={20} />
                        <span className="font-semibold">Comenzar Quiz</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};