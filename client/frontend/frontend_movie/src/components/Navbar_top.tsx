import { Search, User, Menu } from 'lucide-react'; //แนะนำให้ลง lucide-react สำหรับไอคอน (npm i lucide-react)

function NavbarTop() {
    return (
        <nav className="bg-[#0F172A]/50 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left: Logo & Menu */}
          <div className="flex items-center gap-6">
            <button className="lg:hidden text-gray-400 hover:text-white"><Menu size={24}/></button>
            {/* โลโก้ Cineplexy เน้นสีแดงให้ดูเด่น */}
            <h1 className="text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600 cursor-pointer">
              CINEPLEXY
            </h1>
            {/* Desktop Menu Links */}
            <ul className="hidden lg:flex gap-6 text-sm font-medium text-gray-300 ml-8">
              <li className="hover:text-red-500 cursor-pointer transition">หน้าแรก</li>
              <li className="hover:text-red-500 cursor-pointer transition">ภาพยนตร์</li>
              <li className="hover:text-red-500 cursor-pointer transition">โรงภาพยนตร์</li>
              <li className="hover:text-red-500 cursor-pointer transition">โปรโมชั่น</li>
            </ul>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4 text-gray-400">
            <button className="hover:text-white p-2 rounded-full hover:bg-gray-800 transition"><Search size={20} /></button>
            <button className="hover:text-white p-2 rounded-full hover:bg-gray-800 transition"><User size={20} /></button>
          </div>
        </div>
      </nav>
    )
}

export default NavbarTop;