import { useState } from "react"
import http from "../../../utils/http"

function FormPredict() {
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
        try {
            const response = await http.post("/predict",form)
            const {data, meta} = response.data
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return <form onSubmit={handleSubmit} className="grid-cols-2 grid gap-5">
            <fieldset class="fieldset">
                <legend class="fieldset-legend">Pregnancies</legend>
                <input type="number" max={10} min={0} class="input" placeholder="Pregnancies" value={form.Pregnancies} name="Pregnancies" onChange={handlerOnChange} />
            </fieldset>
            <fieldset class="fieldset">
                <legend class="fieldset-legend">Glucose</legend>
                <input type="number" class="input" placeholder="Glucose" value={form.Glucose} name="Glucose" onChange={handlerOnChange} />
            </fieldset>
            <fieldset class="fieldset">
                <legend class="fieldset-legend">BloodPressure</legend>
                <input type="number" class="input" placeholder="BloodPressure" value={form.BloodPressure} name="BloodPressure" onChange={handlerOnChange} />
            </fieldset>
            <fieldset class="fieldset">
                <legend class="fieldset-legend">SkinThickness</legend>
                <input type="number" class="input" placeholder="SkinThickness" value={form.SkinThickness} name="SkinThickness" onChange={handlerOnChange} />
            </fieldset>
            <fieldset class="fieldset">
                <legend class="fieldset-legend">Insulin</legend>
                <input type="number" class="input" placeholder="Insulin" value={form.Insulin} name="Insulin" onChange={handlerOnChange} />
            </fieldset>
            <fieldset class="fieldset">
                <legend class="fieldset-legend">BMI</legend>
                <input type="number" class="input" placeholder="BMI" value={form.BMI} name="BMI" onChange={handlerOnChange} />
            </fieldset>
            <fieldset class="fieldset">
                <legend class="fieldset-legend">DiabetesPedigreeFunction</legend>
                <input type="number" class="input" placeholder="DiabetesPedigreeFunction" value={form.DiabetesPedigreeFunction} onChange={handlerOnChange} name="DiabetesPedigreeFunction" />
            </fieldset>
            <fieldset class="fieldset">
                <legend class="fieldset-legend">Age</legend>
                <input type="number" class="input" placeholder="Age" value={form.Age} name="Age" onChange={handlerOnChange} />
            </fieldset>

            <button className="btn btn-neutral mt-4">Submit</button>
    </form>
}

export default FormPredict