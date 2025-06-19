import { useState } from 'react';

export function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <div>
      <input
        aria-label="Nova tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}
