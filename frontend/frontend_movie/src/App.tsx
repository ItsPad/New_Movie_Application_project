import { useState } from 'react'
import Buyticket_footer from './components/Buyticket_footer';
import NavbarTop from './components/navbar_top';
// import { Search, User, Menu } from 'lucide-react'; // แนะนำให้ลง lucide-react สำหรับไอคอน (npm i lucide-react)

function App() {
  // --- Mock Data (ข้อมูลจำลอง) ---
  const [heroMovie] = useState({
    title: "DUNE: PART TWO",
    description: "การเดินทางในตำนานของพอล อะเทรดีส ยังคงดำเนินต่อไป...",
    bgImage: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg" // ใช้รูปจริงจาก TMDB เป็นตัวอย่าง
  });

  const [nowShowing] = useState([
    { id: 1, title: "Avatar: Fire and Ash", genre: "Action/Sci-Fi", poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/gDVgC9jd917NdAcqBdRRDUYi4Tq.jpg" },
    { id: 2, title: "Five Nights at Freddy's 2", genre: "Horror", poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/udAxQEORq2I5wxI97N2TEqdhzBE.jpg" },
    { id: 3, title: "Zootopia 2", genre: "Animation", poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg" },
    { id: 4, title: "Wicked: For Good", genre: "Fantasy", poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/si9tolnefLSUKaqQEGz1bWArOaL.jpg" },
    { id: 5, title: "Eternity", genre: "Romance", poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/o8pg20G67BGmQvRkXwstNre062J.jpg" },
  ]);
  // ---------------------------

  return (
    // Container หลัก เปลี่ยนสีพื้นหลังเป็นสีเข้ม (Dark Mode theme)
    <div className="min-h-screen bg-[#0F172A] text-gray-100 font-sans">

      {/* === NAVBAR === */}
      <NavbarTop />
      {/*  Footer Navbar Buy ticket */}
      <Buyticket_footer />

      {/* === HERO SECTION (BANNER) === */}
      {/* ใช้ความสูงแบบ dynamic (60% ของจอ) และใส่รูปพื้นหลัง */}
      <header
        className="relative h-[60vh] lg:h-[70vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url('${heroMovie.bgImage}')` }}
      >
        {/* Overlay Gradient เพื่อให้ตัวหนังสืออ่านง่ายขึ้น */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 pb-12 lg:pb-20 relative z-10">
          <span className="inline-block py-1 px-3 bg-red-600 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Now Trending</span>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 max-w-2xl">{heroMovie.title}</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl line-clamp-2">{heroMovie.description}</p>
          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors duration-300 shadow-lg shadow-red-600/30">
              จองตั๋วเลย
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-3 rounded-lg font-bold transition-colors border border-white/20">
              ดูตัวอย่าง
            </button>
          </div>
        </div>
      </header>

      {/* === MAIN CONTENT CONTAINER === */}
      <main className="container mx-auto px-4 py-12">

        {/* --- Section: Now Showing --- */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 before:block before:w-1 before:h-8 before:bg-red-500 before:rounded-full">
              กำลังฉาย
            </h3>
            <a href="#" className="text-red-500 text-sm hover:underline font-medium">ดูทั้งหมด &rarr;</a>
          </div>

          {/* Movie Grid Layout */}
          {/* ใช้ Grid ของ Tailwind: มือถือ 2 คอลัมน์, แท็บเล็ต 3, จอใหญ่ 5 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {nowShowing.map((movie) => (
              // Movie Card Component
              <div key={movie.id} className="group relative bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 cursor-pointer hover:-translate-y-2">
                {/* Poster Container with aspect ratio */}
                <div className="aspect-[2/3] overflow-hidden relative">
                   {/* รูปโปสเตอร์ */}
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover Overlay ปุ่มจอง */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex flex-col gap-4">
                      <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        เลือกรอบฉาย
                      </button>
                      <button className="bg-amber-500 text-white px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        ดูตัวอย่าง
                      </button>
                    </div>
                  </div>
                </div>
                {/* Movie Info */}
                <div className="p-4">
                  <h4 className="font-bold text-lg truncate group-hover:text-red-500 transition-colors">{movie.title}</h4>
                  <p className="text-gray-400 text-sm">{movie.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Section: Coming Soon (ตัวอย่าง Placeholder) --- */}
         <section>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 before:block before:w-1 before:h-8 before:bg-gray-500 before:rounded-full">
              เร็วๆ นี้
            </h3>
             {/* Placeholder สำหรับส่วนที่ยังไม่ทำ */}
            <div className="h-64 bg-gray-800/30 rounded-xl border-2 border-dashed border-gray-700 flex items-center justify-center text-gray-500">
                <p>Coming Soon Section...</p>
            </div>
         </section>

      </main>

      {/* === FOOTER === */}
      <footer className="bg-[#0A0F1C] py-8 text-center text-gray-500 text-sm border-t border-gray-800/50">
        <p>© 2024 CINEPLEXY. All rights reserved.</p>
        <p className="mt-2">Project for educational purpose.</p>
      </footer>

    </div>
  )
}

export default App