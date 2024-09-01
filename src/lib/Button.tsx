import classNames from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
    label: string;
    onClick: () => void;
    variant: 'primary' |'secondary';
    disabled: boolean;
}

function Button(props: ButtonProps) {
    const { label, onClick, variant, disabled } = props;

    const classes = classNames({
        [styles.button]: true,
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary'
    });

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={classes}>
            {label}
        </button>
    )
}

export default Button;