import './styles.css'
type t_comboAction = {
  onAdd: () => void;
  onDelete: () => void;
  numberOfItems: number;
};

const ComboAction: React.FC<t_comboAction> = ({
  onAdd,
  onDelete,
  numberOfItems,
}) => {
  return (
    <div className="combo-action-container">
      <span onClick={onDelete}>-</span>
      <span className='--items'>{numberOfItems}</span>
      <span onClick={onAdd}>+</span>
    </div>
  );
};


export default ComboAction;
