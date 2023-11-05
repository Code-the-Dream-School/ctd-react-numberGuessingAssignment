const buttonStyle = {
    margin: "1em",
    borderRadius: "5px",
    minHeight: "2em",
};

export default function Button(props) {
    return (
        <button style={buttonStyle} {...props}>
            {props.children}
        </button>
    );
}
