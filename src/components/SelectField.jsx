function SelectField({label, name, value, onChange, error, options}){
    return (
        <div>
            <label>{label}</label>
            <select name={name} value={value} onChange={onChange}>
                <option value="">-- Choix --</option>
                {options.map(option => (
                <option value={option.value} key={option.value}>{option.label}</option>
                ))}
            </select>
            {error && <p className="err">{error}</p>}
        </div>
    );
}
export default SelectField;