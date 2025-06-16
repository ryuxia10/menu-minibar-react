// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS untuk App.js
import Navbar from './navbar'; // <--- PASTIKAN BARIS INI ADA!

// --- DATA MENU (CATATAN: Tambahkan/Ubah Daftar Makanan di Sini) ---
const menuData = {
    Coffee: [
        { id: 'c1', name: 'Butterscotch Coffee', price: 'Rp 13.000', image: '/images/butterscotch.png' },
        { id: 'c2', name: 'Vanilla Latte', price: 'Rp 13.000', image: '/images/vanilla.png' },
        { id: 'c3', name: 'Caramel Latte', price: 'Rp 13.000', image: '/images/caramel.png' },
        { id: 'c4', name: 'Hazelnut Coffee', price: 'Rp 13.000', image: '/images/hazelnut.png' },
        { id: 'c5', name: 'Brown Sugar Latte', price: 'Rp 13.000', image: '/images/kopigulaaren.png' },
        { id: 'c6', name: 'Pandan Coffee', price: 'Rp 13.000', image: '/images/pandankopi.png' },
        { id: 'c7', name: 'Salted Caramel Coffee', price: 'Rp 13.000', image: '/images/saltedcaramel.png' },
        { id: 'c8', name: 'Kopi Hitam', price: 'Rp 5.000', image: '/images/kopihitam.png' },
        { id: 'c9', name: 'Kopi Susu', price: 'Rp 5.000', image: '/images/kopisusu.png' },
        // --- Tambahkan menu Coffee lainnya di sini ---
    ],
    'Non-Coffee': [
        { id: 'nc1', name: 'Blue Ocean', price: 'Rp 10.000', image: '/images/blueocean.png' },
        { id: 'nc2', name: 'Cocopandan Squash', price: 'Rp 10.000', image: '/images/cocopandansq.png' },
        { id: 'nc3', name: 'Melon Squash', price: 'Rp 10.000', image: '/images/melonsq.png' },
        { id: 'nc4', name: 'Orange Squash', price: 'Rp 10.000', image: '/images/orangesq.png' },
        { id: 'nc5', name: 'Milo Ice', price: 'Rp 10.000', image: '/images/milo.png' },
        { id: 'nc6', name: 'Milky Beng Beng', price: 'Rp 10.000', image: '/images/bengbeng.png' },
        { id: 'nc7', name: 'Lemon Tea', price: 'Rp 8.000', image: '/images/lemontea.png' },
        { id: 'nc8', name: 'Thai Tea', price: 'Rp 8.000', image: '/images/thaitea.png' },
        { id: 'nc9', name: 'Green Tea', price: 'Rp 8.000', image: '/images/greentea.png' },
        { id: 'nc10', name: 'Matcha', price: 'Rp 8.000', image: '/images/matcha.png' },
        { id: 'nc11', name: 'Milk Tea', price: 'Rp 8.000', image: '/images/milktea.png' },
        { id: 'nc12', name: 'Susu Regal', price: 'Rp 8.000', image: '/images/susuregal.png' },
        { id: 'nc13', name: 'Taro', price: 'Rp 8.000', image: '/images/taro.png' },
        { id: 'nc14', name: 'Choco Classic', price: 'Rp 8.000', image: '/images/chococlassic.png' },
        { id: 'nc15', name: 'Es Teh jumbo', price: 'Rp 5.000', image: '/images/esteh.png' },
        { id: 'nc16', name: 'Es Jeruk', price: 'Rp 5.000', image: '/images/esjeruk.png' },
        { id: 'nc17', name: 'Joshua', price: 'Rp 5.000', image: '/images/joshua.png' },
        { id: 'nc18', name: 'Pop Ice', price: 'Rp 5.000', image: '/images/popice.png' },
        { id: 'nc19', name: 'Sarabba', price: 'Rp 5.000', image: '/images/sarabba.png' },
        // --- Tambahkan menu Non-Coffee lainnya di sini ---
    ],
    Snacks: [
        { id: 's1', name: 'Mix Platter', price: 'Rp 12.000', image: '/images/mixplatter.png' },
        { id: 's2', name: 'Cireng Ayam', price: 'Rp 10.000', image: '/images/cirengayam.png' },
        { id: 's3', name: 'Kentang Goreng', price: 'Rp 10.000', image: '/images/kentanggoreng.png' },
        { id: 's4', name: 'Singkong Gammi', price: 'Rp 10.000', image: '/images/singkonggammi.png' },
        { id: 's5', name: 'Tela Tela', price: 'Rp 10.000', image: '/images/telatela.png' },
        { id: 's6', name: 'Sempol', price: 'Rp 10.000', image: '/images/sempol.png' },
        { id: 's7', name: 'Pentol Goreng', price: 'Rp 10.000', image: '/images/pentolgoreng.png' },
        { id: 's8', name: 'Siomay Goreng', price: 'Rp 10.000', image: '/images/siomay.png' },
        { id: 's9', name: 'Piscok Krispi', price: 'Rp 10.000', image: '/images/piscok.png' },
        { id: 's10', name: 'Sosis Krispi', price: 'Rp 10.000', image: '/images/sosiskrispi.png' },
        { id: 's11', name: 'Cireng Salju', price: 'Rp 10.000', image: '/images/cirengsalju.png' },

        // --- Tambahkan menu Snacks lainnya di sini ---
    ],
    'Mie Polos': [
        { id: 'mp1', name: 'Mie Goreng', price: 'Rp 7.000', image: '/images/miegoreng.png' },
        { id: 'mp2', name: 'Mie Kari Ayam', price: 'Rp 7.000', image: '/images/miekari.png' },
        { id: 'mp3', name: 'Mie Kaldu Ayam', price: 'Rp 7.000', image: '/images/miekaldu.png' },
        { id: 'mp4', name: 'Mie Soto', price: 'Rp 7.000', image: '/images/miesoto.png' },
        { id: 'mp5', name: 'Mie Limau Kuwit', price: 'Rp 7.000', image: '/images/mielimau.png' },

        // --- Tambahkan jenis Mie Polos lainnya di sini ---
    ],
    'Topping Mie': [
        { id: 'tm1', name: 'Sosis', price: 'Rp 3.000', image: '/images/sosis.png' },
        { id: 'tm2', name: 'Telur Goreng', price: 'Rp 3.000', image: '/images/telurgoreng.png' },
        { id: 'tm3', name: 'Telur Rebus', price: 'Rp 3.000', image: '/images/telurrebus.png' },
        { id: 'tm4', name: 'Nasi Putih', price: 'Rp 5.000', image: '/images/nasiputih.png' },
        { id: 'tm5', name: 'Pentol', price: 'Rp 5.000', image: '/images/pentol.png' },

        // --- Tambahkan Topping Mie lainnya di sini ---
    ],
};
// --- AKHIR DATA MENU ---
// URL gambar asli Anda sendiri atau path lokal (misalnya, '/images/espresso.jpg').
// Pastikan gambar-gambar tersebut berada di folder 'public' jika Anda menggunakan path relatif.

function App() {
    const categories = Object.keys(menuData);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [currentItems, setCurrentItems] = useState([]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getAllMenuItems = () => {
        let allItems = [];
        for (const category in menuData) {
            allItems = allItems.concat(menuData[category]);
        }
        return allItems;
    };

    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            let itemsToDisplay;

            if (searchTerm) {
                const allItems = getAllMenuItems();
                const lowerCaseSearchTerm = searchTerm.toLowerCase();
                itemsToDisplay = allItems.filter(item =>
                    item.name.toLowerCase().includes(lowerCaseSearchTerm)
                );
            } else {
                itemsToDisplay = menuData[activeCategory] || [];
            }

            setCurrentItems(itemsToDisplay);
            setIsTransitioning(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [activeCategory, searchTerm]);

    const handleCategoryClick = (category) => {
        setSearchTerm('');
        setActiveCategory(category);
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = '6285167535332';
        const message = encodeURIComponent("Permisi, apakah saya dapat memesan?");
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="menu-app">
            <Navbar onSearch={setSearchTerm} currentSearchTerm={searchTerm} />

            <nav className="category-nav">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`nav-button ${activeCategory === category && !searchTerm ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </nav>

            <main className="menu-content">
                <div className={`menu-grid-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                    <div className="menu-grid-items">
                        {currentItems.length > 0 ? (
                            currentItems.map(item => (
                                <div key={item.id} className="menu-item">
                                    <img src={item.image} alt={item.name} className="item-image" />
                                    <div className="item-details">
                                        <h3 className="item-name">{item.name}</h3>
                                        <p className="item-price">{item.price}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="no-results">
                                {searchTerm ? `Tidak ada menu ditemukan untuk "${searchTerm}".` : `Tidak ada menu di kategori "${activeCategory}".`}
                            </p>
                        )}
                    </div>
                </div>
            </main>

            <footer className="app-footer">
                <p>&copy; <span id="currentYear">{new Date().getFullYear()}</span> MINI BAR CAFE. Jl. R.E. Martadinata Samping Konter Umar Cell RT. 11 No. 4, Loktuan, Bontang Utara. Whatsapp: 0851-6753-5332.</p>
            </footer>

            {/* --- WIDGET WHATSAPP MENGAMBANG DENGAN TEKS BERPUTAR --- */}
            <a className="whatsapp-float-container" onClick={handleWhatsAppClick} href="#">
                <i className="fab fa-whatsapp whatsapp-icon"></i>
                <svg className="whatsapp-text-path" viewBox="0 0 100 100">
                    <defs>
                        {/* Lingkaran untuk teks berputar */}
                        <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0 " />
                    </defs>
                    <text fill="#fff" fontSize="11.3" fontWeight="bold"> {/* Ganti fill sesuai warna teks yang Anda inginkan */}
                        <textPath xlinkHref="#circlePath">
                            ORDER DISINI • ORDER DISINI • ORDER DISINI •
                        </textPath>
                    </text>
                </svg>
            </a>
            {/* --- AKHIR WIDGET WHATSAPP --- */}
        </div>
    );
}

export default App;