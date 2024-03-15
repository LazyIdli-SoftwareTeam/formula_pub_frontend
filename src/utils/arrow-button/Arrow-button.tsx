import "./Arrow-button.css"

type ArrowButtonProps = {
        children: React.ReactNode;
        className?: string;
        onClick: () => void;
};

const ArrowButton = ({ children, className, onClick }: ArrowButtonProps) => {
    return (
        <button className={`arrow-button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default ArrowButton
