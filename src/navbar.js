// src/Navbar.js

import React, { useState, useEffect } from 'react'; // <-- Tambahkan useEffect
import './Navbar.css';

// Navbar sekarang menerima prop 'currentSearchTerm'
const Navbar = ({ onSearch, currentSearchTerm }) => { // <-- TAMBAHKAN currentSearchTerm
    const [searchTerm, setSearchTerm] = useState(currentSearchTerm); // <-- INISIALISASI DENGAN PROP

    // Tambahkan useEffect untuk sinkronisasi state internal dengan prop
    useEffect(() => {
        setSearchTerm(currentSearchTerm);
    }, [currentSearchTerm]); // <-- Efek ini berjalan setiap kali currentSearchTerm berubah

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    const handleSearchClick = () => {
        setIsSearchExpanded(true);
    };

    const handleSearchBlur = () => {
        if (searchTerm === '') {
            setIsSearchExpanded(false);
        }
    };

    // Pastikan state ini didefinisikan jika belum ada
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    // Tambahan: Atur isSearchExpanded berdasarkan apakah ada nilai di input atau tidak
    useEffect(() => {
        if (currentSearchTerm) {
            setIsSearchExpanded(true);
        } else {
            // Jika searchTerm kosong, dan input tidak sedang fokus, ciutkan
            // Ini bisa sedikit tricky, pastikan tidak menutup saat sedang mengetik
            // Untuk saat ini, kita biarkan saja saat input kosong
            // Ini akan ditangani oleh onBlur, tapi kita bisa pastikan saat kategori di-klik
            if (!document.activeElement.classList.contains('search-input')) {
                setIsSearchExpanded(false);
            }
        }
    }, [currentSearchTerm]);


    return (
        <header className="navbar-header">
            <div className="navbar-left">
                <img src="https://via.placeholder.com/60x60/704214/F5F5DC?text=MB" alt="MINI BAR Logo" className="navbar-logo" />
                <h1>MINI BAR CAFE</h1>
            </div>
            <div className="navbar-center">
                <div
                    className={`search-container ${isSearchExpanded ? 'expanded' : ''}`}
                    onClick={handleSearchClick}
                >
                    <i className="fas fa-search search-icon"></i>
                    <input
                        type="text"
                        placeholder="Cari menu..."
                        className="search-input"
                        value={searchTerm} // <-- Gunakan state lokal 'searchTerm'
                        onChange={handleSearchChange}
                        onFocus={handleSearchClick}
                        onBlur={handleSearchBlur}
                    />
                </div>
            </div>
            <div className="navbar-right">
                <img src="/images/minibar-logo.png" alt="MINI BAR Secondary Logo" className="navbar-secondary-logo" />
            </div>
        </header>
    );
};

export default Navbar;