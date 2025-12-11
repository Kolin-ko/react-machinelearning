import { useState } from "react"
import http from "../../utils/http"

function RpsPage() {
    const [form, setForm] = useState({
        file: null
    })

    const handleFileChange = (event) => {
        setForm({
            file : event.target.files[0]
        })
    }

    const [result, setResult] = useState({
        prediction : '',
        probability : ''
    }) 


    const onSubmit = async(event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('file', form.file)

        const response = await http.post('/predict-rps', formData, {
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })

        setResult({
            prediction : response.data.data.prediction,
            probability : response.data.data.probability,
        })
    }
    return (
        <div className="min-h-screen bg-slate-400 flex">
            <div className="bg-amber-100 justify-center">
                <h1>Prediksi Gunting Batu Kertas</h1>
                <form onSubmit={onSubmit}>
                    <input 
                    type="file" 
                    className="file-input"
                    onChange={handleFileChange}
                    />
                    <button type="submit" className="btn btn-primary">
                        Lakukan Prediksi</button>
                </form>
                <div>
                    <div>Hasil Prediksi : {result.prediction}</div>
                    <div>Probabilitas : {result.probability}</div>
                </div>

            </div>
        </div>
    )
}

export default RpsPage