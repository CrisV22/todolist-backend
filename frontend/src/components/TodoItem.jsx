export function TodoItem({ item, onDelete }) {
  return (
    <li>
      <span>{item.description}</span>
      <button id='delete-button' onClick={() => onDelete(item.id)} aria-label={`Excluir ${item.description}`}>Excluir</button>
    </li>
  );
}
