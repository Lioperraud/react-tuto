function InputField({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className="err">{error}</p>}
    </div>
  );
}

export default InputField;