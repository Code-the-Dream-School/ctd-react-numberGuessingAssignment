const buttonStyle = {
  margin: "1em",
  borderRadius: "5px",
  minHeight: "2em",
};

export default function Button({ onClick, disabled, children }) {
  return (
    <button style={buttonStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
