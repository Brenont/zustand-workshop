import "./style.css";

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      className="input-root"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export { Input };
