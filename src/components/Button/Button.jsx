const Button = (props) => {
    return (
        <button
            type={props.type}
            className={props.className}
            onClick={props.onClick}
            >
            {props.label}
        </button>
    )
}

export default Button