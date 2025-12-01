import { useState } from "react"
import http from "../../../utils/http"

function FormPredict({
    isloading, setIsloading,setPrediction
}) {

    const [form, setForm] = useState({
        Pregnancies: 0,
        Glucose: 0,
        BloodPressure: 0,
        SkinThickness: 0,
        Insulin: 0,
        BMI: 0,
        DiabetesPedigreeFunction: 0,
        Age: 0
    })
    const handlerOnChange = (event) => {
        const { value, name } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = async(event) => {
        event.preventDefault()
        setIsloading(true)
        try {
            const response = await http.post("/predict",form)
            const {data, meta} = response.data
            console.log(data);
            setPrediction(data)
        } catch (error) {
            console.log(error);
        }finally{
            setIsloading(false)
        }
    }

    return <form onSubmit={handleSubmit} className="grid-cols-2 grid gap-5">
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Pregnancies</legend>
                <input type="number" max={10} min={0} className="input" placeholder="Pregnancies" value={form.Pregnancies} name="Pregnancies" onChange={handlerOnChange} />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Glucose</legend>
                <input type="number" className="input" placeholder="Glucose" value={form.Glucose} name="Glucose" onChange={handlerOnChange} />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">BloodPressure</legend>
                <input type="number" className="input" placeholder="BloodPressure" value={form.BloodPressure} name="BloodPressure" onChange={handlerOnChange} />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">SkinThickness</legend>
                <input type="number" className="input" placeholder="SkinThickness" value={form.SkinThickness} name="SkinThickness" onChange={handlerOnChange} />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Insulin</legend>
                <input type="number" className="input" placeholder="Insulin" value={form.Insulin} name="Insulin" onChange={handlerOnChange} />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">BMI</legend>
                <input type="number" className="input" placeholder="BMI" value={form.BMI} name="BMI" onChange={handlerOnChange} />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">DiabetesPedigreeFunction</legend>
                <input type="number" className="input" placeholder="DiabetesPedigreeFunction" value={form.DiabetesPedigreeFunction} onChange={handlerOnChange} name="DiabetesPedigreeFunction" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input type="number" className="input" placeholder="Age" value={form.Age} name="Age" onChange={handlerOnChange} />
            </fieldset>

            <button className="btn btn-neutral mt-4" disabled={isloading}>{
                isloading ? "Loading..." : "Predict Diabetes"
                }</button>
    </form>
}

export default FormPredict