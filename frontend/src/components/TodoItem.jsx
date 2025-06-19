export function TodoItem({ item, onDelete }) {
  return (
    <li>
      <span>{item.title}</span>
      <button id='delete-button' onClick={() => onDelete(item.id)} aria-label={`Excluir ${item.title}`}>Excluir</button>
    </li>
  );
}
