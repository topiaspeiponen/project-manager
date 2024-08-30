type ButtonProps = {
    label: string;
    onClick: () => void;
}

function Button(props: ButtonProps) {
    const { label, onClick } = props;

    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;