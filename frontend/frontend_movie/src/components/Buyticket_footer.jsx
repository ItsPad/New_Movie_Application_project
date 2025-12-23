import { useState } from 'react';
import { ChevronUp, ChevronDown, Search } from 'lucide-react'; // อย่าลืมลง npm i lucide-react

function App() {
  // สร้าง State สำหรับเปิด/ปิด Dropdown
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* ... เนื้อหาอื่นๆ ... */}
      <div className="p-10">เนื้อหาเว็บไซต์...</div>

      {/* === Bottom Navbar === */}
      {/* ใช้ fixed bottom-0 และ border-t (เส้นบน) */}
      <nav className="bg-[#0F172A]/95 backdrop-blur-md fixed w-full left-0 bottom-0 z-50 border-t border-gray-800 pb-safe">
        
        <div className="flex flex-row justify-center items-center gap-6 p-4">
          
          <p className="text-white font-bold text-lg">Buy Ticket</p>
          <p className="text-gray-600"> | </p>

          {/* === ส่วน Dropdown === */}
          {/* 1. ใส่ relative ที่ตัวคลุม เพื่อให้ dropdown อ้างอิงจากจุดนี้ */}
          <div className="relative">
            
            {/* 2. ตัว Dropdown Content */}
            {isOpen && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl p-3 animate-fade-in-up">
                {/* หัวลูกศรชี้ลง (Optional เพื่อความสวยงาม) */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 border-b border-r border-gray-700 rotate-45"></div>
                
                {/* Input ค้นหา */}
                <label className="block text-xs text-gray-400 mb-1 ml-1">ค้นหาภาพยนตร์</label>
                <div className="flex items-center bg-gray-900 rounded-lg border border-gray-700 px-3 py-2">
                  <Search size={16} className="text-gray-500 mr-2" />
                  <input 
                    type="text" 
                    placeholder="พิมพ์ชื่อเรื่อง..." 
                    className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-gray-600"
                    autoFocus
                  />
                </div>
              </div>
            )}

            {/* 3. ปุ่มกด Trigger */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              <span>ค้นหา</span>
              {/* เปลี่ยนไอคอนตามสถานะ */}
              {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </button>

          </div>
          {/* === จบส่วน Dropdown === */}

        </div>
      </nav>
    </div>
  )
}

export default App