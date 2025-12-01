import { useState } from "react"
import FormPredict from "./components/form-predict"

function PredictDiabetesPage() {
    const [prediction, setPrediction] = useState(null)
    const [isloading, setIsloading] = useState(false)
    if (isloading) {
        return <img src="https://media.tenor.com/I9qt03YKkjQAAAAe/monkey-thinking.png" alt="" />
    }
    return (
        <div className="min-h-screen bg-slate-400 flex items-center justify-center">
            <div className="bg-amber-100 flex items-center justify-center">
                <div className="bg-white p-5 rounded-3xl max-w-6xl">
                    <FormPredict 
                    isloading={isloading} 
                    setIsloading={setIsloading} 
                    prediction={prediction}
                    setPrediction={setPrediction}/>
                </div>
                <div className="p-5 text-xl">
                    Hasil Prediksi:{" "}
                    {prediction === null
                        ? "menunggu input..."
                        : prediction == "1"? "Positif" : "Negatif"}
                </div>
            </div>
        </div>
    )
}

export default PredictDiabetesPage