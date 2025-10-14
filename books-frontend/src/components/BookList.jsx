import { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/bookService';

export default function BookList({ onEdit }) {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    loadBooks();
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <h2>Lista de libros</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} — {book.author}
            <button onClick={() => onEdit(book)}>Editar</button>
            <button onClick={() => handleDelete(book.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
