import { useState, useEffect } from 'react';
import { createBook, updateBook } from '../services/bookService';

export default function BookForm({ selectedBook, onSaved, onCancel }) {
  const [book, setBook] = useState({ title: '', author: '' });

  useEffect(() => {
    if (selectedBook) setBook(selectedBook);
    else setBook({ title: '', author: '' });
  }, [selectedBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (book.id) await updateBook(book.id, book);
    else await createBook(book);
    onSaved();
    setBook({ title: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-lg border">
      <h3 className="font-medium text-md">{book.id ? 'Editar libro' : 'Agregar libro'}</h3>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Título</label>
        <input
          type="text"
          placeholder="Título"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Autor</label>
        <input
          type="text"
          placeholder="Autor"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          {book.id ? 'Actualizar' : 'Agregar'}
        </button>
        <button type="button" onClick={onCancel} className="px-3 py-2 text-sm border rounded hover:bg-gray-100">
          Cancelar
        </button>
      </div>
    </form>
  );
}