function CheckboxField({label, name, value, onChange, error}){
    return (
        <div>
            <label>{label}</label>
            <input
                type="checkbox"
                name={name}
                checked={value}
                onChange={onChange}
            />
            {error && <p className="err">{error}</p>}
        </div>
    );
}
export default CheckboxField;