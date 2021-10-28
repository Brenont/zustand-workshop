import "./style.css";

const Button = ({ children, onClick, disabled }) => (
  <button className="button-root" onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export { Button };
