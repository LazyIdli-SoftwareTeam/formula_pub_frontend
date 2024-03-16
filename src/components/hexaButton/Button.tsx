import './styles.css';

type t_hexButton = {
  content: string;
  onClick: () => void;
  bgColor?: string;
  disabled: boolean;
};

const Button: React.FC<t_hexButton> = ({
  content,
  onClick,
  bgColor,
  disabled,
}) => {
  return (
    <div
      onClick={onClick}
      style={bgColor ? { backgroundColor: bgColor } : {}}
      className={`global-hex-button-container ${
        disabled ? 'global-hex-btn-disabled' : ''
      }`}
    >
      {content}
    </div>
  );
};



export default Button; 