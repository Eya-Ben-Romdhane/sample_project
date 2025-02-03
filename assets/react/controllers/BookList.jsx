// assets/react/controllers/BookList.jsx

import React from 'react';

export default function BookList() {
    let books = [], newBook = '';

    return (
        <div>
            <h2>Liste des Livres</h2>
            <input type="text" onChange={(e) => newBook = e.target.value} placeholder="Ajouter un livre" />
            <button onClick={() => { if (newBook.trim()) books.push(newBook.trim()); newBook = ''; }}>Ajouter</button>
            <ul>{books.map((book, index) => <li key={index}>{book}</li>)}</ul>
        </div>
    );
}