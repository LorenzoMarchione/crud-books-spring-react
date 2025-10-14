
import { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import './App.css'

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (book) => setSelectedBook(book);
  const handleSaved = () => {
    setSelectedBook(null);
    setRefresh(!refresh);
  };

  return (
    <>
      <div>
        <h1>📚 Gestor de Libros</h1>
        <BookForm selectedBook={selectedBook} onSaved={handleSaved} />
        <BookList key={refresh} onEdit={handleEdit} />
      </div>
    </>
  )
}

export default App
