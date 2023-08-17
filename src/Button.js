const buttonStyle = {
    margin: "1em",
    borderRadius: "5px",
    minHeight: "2em",
  };
  
  export default function Button({ onClick, children, onKeyDown}) {
    return (
      <button style={buttonStyle} onClick={onClick} onKeyDown={onKeyDown}>
        {children}
      </button>
    );
  }