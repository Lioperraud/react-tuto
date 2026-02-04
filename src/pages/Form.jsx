import { useState } from "react";

function Form(){

    const [form, setForm] = useState({
        name: "",
        email: "",
        isChecked: false,
        country: "fr"
    });
    const [isValid, setIdValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIdValid(form.name.length > 0);
    };

    return(
        <div>
            <h1>Formulaire de contact</h1>
            <form className="contact" onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    placeholder="Nom"
                />
                <input
                    name="email"
                    type="text"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    placeholder="Email"
                />
                <label>Check : <input
                    type="checkbox"
                    name="isChecked"
                    checked={form.isChecked}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.checked })}
                /></label>
                <select name="country" value={form.country} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}>
                    <option value="fr">France</option>
                    <option value="be">Belgique</option>
                    <option value="ch">Suisse</option>
                </select>
                <button type="submit">Envoyer</button>
            </form>
            {isValid && 
            <>
                <div className="contact_recap">
                    <span>Nom : {form.name}</span>
                    <span>Email : {form.email}</span>
                    <span>IsChecked : {String(form.isChecked)}</span>
                    <span>Pays : {form.country}</span>
                </div>
            </>
            }
        </div>
    );
}
export default Form;