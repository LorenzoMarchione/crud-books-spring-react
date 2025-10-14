import { useState, useEffect } from 'react';
import { createBook, updateBook } from '../services/bookService';

export default function BookForm({ selectedBook, onSaved }) {
  const [book, setBook] = useState({ title: '', author: '' });

  useEffect(() => {
    if (selectedBook) setBook(selectedBook);
  }, [selectedBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (book.id) await updateBook(book.id, book);
    else await createBook(book);
    onSaved();
    setBook({ title: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
        required
      />
      <button type="submit">{book.id ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}
