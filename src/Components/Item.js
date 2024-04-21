export default function Item({ itemObj, onDeleteItems, handleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onClick={() => handleToggleItem(itemObj.id)}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDeleteItems(itemObj.id)}>❌</button>
    </li>
  );
}
