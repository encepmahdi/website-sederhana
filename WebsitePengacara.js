import React from 'react';
import { motion } from 'framer-motion';

export default function WebsitePengacara() {
  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 w-full z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <a href="/" className="flex items-center py-5 px-2 text-gray-700 font-bold text-lg">Kantor Hukum EMH</a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#layanan" className="py-5 px-3 hover:text-blue-500">Layanan</a>
              <a href="#tentang" className="py-5 px-3 hover:text-blue-500">Tentang</a>
              <a href="#kontak" className="py-5 px-3 hover:text-blue-500">Kontak</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-50 h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-blue-900"
        >
          Solusi Hukum Profesional & Terpercaya
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
          Kantor Hukum Encep Mahdi Hidayat siap membantu menyelesaikan masalah hukum Anda dengan layanan terbaik.
        </p>
        <a href="#kontak" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Hubungi Kami</a>
      </section>

      {/* Layanan */}
      <section id="layanan" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Layanan Kami</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Konsultasi Hukum</h3>
            <p className="text-gray-600">Dapatkan solusi tepat untuk masalah hukum Anda dengan konsultasi profesional.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Pendampingan Kasus</h3>
            <p className="text-gray-600">Kami siap mendampingi Anda di setiap proses hukum dengan integritas tinggi.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Penyusunan Kontrak</h3>
            <p className="text-gray-600">Penyusunan dokumen hukum dan kontrak bisnis yang aman dan sah.</p>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
          <p className="text-gray-700 leading-relaxed">
            Dengan pengalaman bertahun-tahun, Kantor Hukum Encep Mahdi Hidayat berkomitmen memberikan layanan hukum profesional,
            berintegritas, dan berorientasi pada solusi untuk klien individu maupun perusahaan.
          </p>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Kontak Kami</h2>
          <p className="mb-4 text-gray-700">Email: encepmahdihidayat@gmail.com</p>
          <p className="mb-6 text-gray-700">Telp: 089515797774 / 081252320431</p>
          <a href="mailto:encepmahdihidayat@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Kirim Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Kantor Hukum Encep Mahdi Hidayat. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}
