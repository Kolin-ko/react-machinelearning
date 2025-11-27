import { useState } from "react"
import FormPredict from "./components/form-predict"

function PredictDiabetesPage() {
    const [setPrediction] = useState(null)
    const [isloading, setIsloading] = useState(false)
    if (isloading) {
        <img src="https://media.tenor.com/I9qt03YKkjQAAAAe/monkey-thinking.png" alt="" />
    }
    return (
        <div className="min-h-screen bg-slate-400 flex items-center justify-center">
            <div className="bg-amber-100 flex items-center justify-center">
                <div className="bg-white p-5 rounded-3xl max-w-6xl">
                    <FormPredict isloading={isloading} setIsloading={setIsloading} setPrediction={setPrediction}/>
                </div>
                <div className="p-5">
                    Hasil Prediksi : sepertinya{setPrediction === 0 ? "negatif" : "positif"}
                    {/* <img src="https://preview.redd.it/monkey-thinking-v0-j08u39bvfxrf1.jpg?width=640&crop=smart&auto=webp&s=e29d499be5a7b19b66c0a46df097d5677a94b7e3" alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default PredictDiabetesPage