import { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/bookService';

export default function BookList({ onEdit, refresh }) {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const res = await getBooks();
    setBooks(res.data || []);
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar este libro?')) return;
    await deleteBook(id);
    loadBooks();
  };

  useEffect(() => {
    loadBooks();
  }, [refresh]);

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Lista de libros</h2>
      <ul className="space-y-3">
        {books.map(book => (
          <li key={book.id} className="flex items-center justify-between bg-gray-50 border rounded-lg p-4">
            <div>
              <div className="font-semibold">{book.title}</div>
              <div className="text-sm text-gray-500">{book.author}</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
                onClick={() => onEdit(book)}
              >
                Editar
              </button>
              <button
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleDelete(book.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}