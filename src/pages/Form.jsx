import { useState } from "react";
import InputField from "../components/InputField";
import CheckboxField from "../components/CheckboxField";
import SelectField from "../components/SelectField";

function Form(){

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        cgu: false,
        rgpd: false,
        country: ""
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
    
        if(!form.cgu)
            newErrors.cgu='Vous devez accepter les CGU';
        if(!form.rgpd)
            newErrors.rgpd='Vous devez accepter le RGPD';

        if(!form.country)
            newErrors.country='Le pays est obligatoire';
        
        return newErrors;
    };

    const handleChange = (e) => {
        if(e.target.type=='checkbox')
            setForm({ ...form, [e.target.name]: e.target.checked })
        else
            setForm({ ...form,[e.target.name]: e.target.value});
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
                <InputField
                    label="Nom"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <InputField
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <InputField
                    label="Mot de passe"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <InputField
                    label="Confirmation mot de passe"
                    name="password2"
                    type="password"
                    value={form.password2}
                    onChange={handleChange}
                    error={errors.password2}
                />
                <CheckboxField
                    label="Acceptation CGU"
                    name="cgu"
                    value={form.cgu}
                    onChange={handleChange}
                    error={errors.cgu}
                />
                <CheckboxField
                    label="Acceptation RGPD"
                    name="rgpd"
                    value={form.rgpd}
                    onChange={handleChange}
                    error={errors.rgpd}
                />
                <SelectField
                    label="Pays"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    error={errors.country}
                    options={ [
                    { value: "fr", label: "France" },
                    { value: "ch", label: "Suisse" },
                    { value: "be", label: "Belgique" }
                    ]}
                />
                <button type="submit">Envoyer</button>
            </form>
            {isValid && 
            <>
                <div className="contact_recap">
                    <h2>Formulaire valide !</h2>
                    <span>Nom : {form.name}</span>
                    <span>Email : {form.email}</span>
                    <span>Acceptation CGU : {String(form.cgu)}</span>
                    <span>Acceptation RGPD : {String(form.rgpd)}</span>
                    <span>Pays : {form.country}</span>
                </div>
            </>
            }
        </div>
    );
}
export default Form;