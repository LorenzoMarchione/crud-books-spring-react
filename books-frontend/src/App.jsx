
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
  const handleCancel = () => setSelectedBook(null);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-200  flex items-start justify-center p-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold flex items-center gap-3">
              <span className="text-3xl">📚</span>
              Gestor de Libros
            </h1>
            <span className="text-sm text-gray-500">CRUD · API · Tailwind</span>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <aside className="md:col-span-1">
              <BookForm selectedBook={selectedBook} onSaved={handleSaved} onCancel={handleCancel} />
            </aside>

            <main className="md:col-span-2">
              <BookList refresh={refresh} onEdit={handleEdit} />
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
