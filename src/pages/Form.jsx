import { useState } from "react";

function Form(){

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        isChecked: false,
        country: "fr"
    });
    const [isValid, setIdValid] = useState();
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if(!form.name)
            newErrors.name='Le nom est obligatoire';
        
        if(!form.email)
            newErrors.email='L\'email est obligatoire';
        else if(!form.email.includes("@"))
            newErrors.email='L\'email est invalide';
        
        if(!form.password)
            newErrors.password='Le mot de passe est obligatoire';
        else if(form.password.length<6)
            newErrors.password='6 caractères minimum';
        else if(form.password!=form.password2)
            newErrors.password2='Confirmation mdp incorrect';
    
        if(!form.isChecked)
            newErrors.isChecked='Check est obligatoire';
        
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        setIdValid(!Object.keys(validationErrors).length);
        
    };

    return(
        <div>
            <h1>Formulaire de contact</h1>
            <form className="contact" onSubmit={handleSubmit}>
                {isValid===false && <p className="err">Formulaire invalide !</p>}
                <div>
                    <input
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                        placeholder="Nom"
                    />
                    {errors.name && <p className="err">{errors.name}</p>}
                </div>
                <div>
                    <input
                        name="email"
                        type="text"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                        placeholder="Email"
                    />
                    {errors.email && <p className="err">{errors.email}</p>}
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                        placeholder="Mot de passe"
                    />
                    {errors.password && <p className="err">{errors.password}</p>}
                </div>
                <div>
                    <input
                        name="password2"
                        type="password"
                        value={form.password2}
                        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                        placeholder="Confirmation mot de passe"
                    />
                    {errors.password2 && <p className="err">{errors.password2}</p>}
                </div>
                <div>
                    <label>Check : <input
                        type="checkbox"
                        name="isChecked"
                        checked={form.isChecked}
                        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.checked })}
                    /></label>
                    {errors.isChecked && <p className="err">{errors.isChecked}</p>}
                </div>
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
                    <h2>Formulaire valide !</h2>
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