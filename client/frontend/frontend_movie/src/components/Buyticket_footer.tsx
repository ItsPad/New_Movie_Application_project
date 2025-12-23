import { useState } from 'react';
import { ChevronUp, ChevronDown, Search, MapPin } from 'lucide-react';

type TabType = 'movie' | 'cinema';

function Buyticket_footer() {
  const [activeTab, setActiveTab] = useState<TabType | null>(null);

  const toggleTab = (tabName: TabType) => {
    if (activeTab === tabName) {
      setActiveTab(null);
    } else {
      setActiveTab(tabName);
    }
  };

  return (
    <nav className="bg-red-600/95 backdrop-blur-md fixed w-full left-0 bottom-0 z-50 border-t border-gray-800 pb-safe">
        
        {/* ใช้ flex และ gap เพื่อจัดเรียง 3 ส่วน */}
        <div className="container mx-auto flex flex-row items-center gap-3 p-4">
          
          {/* === ส่วนที่ 1: ซ้ายสุด (Title) === */}
          {/* shrink-0 เพื่อป้องกันไม่ให้ข้อความถูกบีบจนตกบรรทัด */}
          <div className="shrink-0 flex items-center gap-2 mr-2">
             <p className="text-white font-bold text-lg whitespace-nowrap">Buy Ticket</p>
             <p className="text-gray-600 hidden sm:block"> | </p>
          </div>


          {/* === ส่วนที่ 2: ตรงกลาง (เลือกภาพยนตร์) === */}
          {/* ใช้ flex-1 เพื่อให้ขยายพื้นที่เต็มที่ และ relative เพื่อเป็นจุดอ้างอิง dropdown */}
          <div className="flex-1 relative">
            
            {/* Dropdown: Movie */}
            {activeTab === 'movie' && (
              <div className="absolute bottom-full left-0 mb-4 w-full min-w-[200px] bg-gray-800 border border-gray-700 rounded-xl shadow-2xl p-3 animate-fade-in-up z-50">
                 {/* ลูกศรชี้ลง (จัดกึ่งกลาง) */}
                 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 border-b border-r border-gray-700 rotate-45"></div>
                 
                 <label className="block text-xs text-red-400 mb-2 ml-1 font-bold uppercase">ค้นหาภาพยนตร์</label>
                 <div className="flex items-center bg-gray-900/50 rounded-lg border border-gray-600 focus-within:border-red-500 px-3 py-2">
                    <Search size={16} className="text-gray-400 mr-2" />
                    <input type="text" placeholder="ชื่อหนัง..." className="bg-transparent border-none outline-none text-sm text-white w-full" autoFocus />
                 </div>
              </div>
            )}

            {/* Button: Movie */}
            <button 
                onClick={() => toggleTab('movie')}
                className={`w-full flex justify-center items-center gap-2 transition-all px-3 py-3 rounded-lg text-sm font-bold border truncate
                  ${activeTab === 'movie' 
                    ? 'bg-yellow-500 border-yellow-400 text-black shadow-lg shadow-yellow-900/40' 
                    : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                  }`}
              >
                <Search size={18} className="shrink-0" />
                <span className="truncate">ภาพยนตร์</span>
                {activeTab === 'movie' ? <ChevronDown size={16} className="shrink-0"/> : <ChevronUp size={16} className="shrink-0"/>}
            </button>
          </div>


          {/* === ส่วนที่ 3: ขวาสุด (เลือกโรงหนัง) === */}
          {/* ใช้ flex-1 เช่นกัน เพื่อให้ขนาดเท่ากับปุ่ม Movie */}
          <div className="flex-1 relative">

            {/* Dropdown: Cinema */}
            {activeTab === 'cinema' && (
               // ใช้ right-0 เพื่อให้ dropdown ชิดขวาเสมอ ไม่ล้นจอ
              <div className="absolute bottom-full right-0 mb-4 w-full min-w-[200px] bg-gray-800 border border-gray-700 rounded-xl shadow-2xl p-3 animate-fade-in-up z-50">
                 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 border-b border-r border-gray-700 rotate-45"></div>
                 
                 <label className="block text-xs text-yellow-400 mb-2 ml-1 font-bold uppercase">ค้นหาโรงภาพยนตร์</label>
                 <div className="flex items-center bg-gray-900/50 rounded-lg border border-gray-600 focus-within:border-yellow-500 px-3 py-2">
                    <MapPin size={16} className="text-gray-400 mr-2" />
                    <select className="bg-transparent border-none outline-none text-sm text-white w-full appearance-none">
                      <option value="" disabled selected>เลือกสาขา...</option>
                      <option value="1">Paragon Cineplex</option>
                      <option value="2">Icon Cineconic</option>
                    </select>
                 </div>
              </div>
            )}

            {/* Button: Cinema */}
            <button 
                onClick={() => toggleTab('cinema')}
                className={`w-full flex justify-center items-center gap-2 transition-all px-3 py-3 rounded-lg text-sm font-bold border truncate
                  ${activeTab === 'cinema' 
                    ? 'bg-yellow-500 border-yellow-400 text-black shadow-lg shadow-yellow-900/40' 
                    : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                  }`}
              >
                <MapPin size={18} className="shrink-0" />
                <span className="truncate">โรงหนัง</span>
                {activeTab === 'cinema' ? <ChevronDown size={16} className="shrink-0"/> : <ChevronUp size={16} className="shrink-0"/>}
            </button>
          </div>

        </div>
      </nav>
  )
}

export default Buyticket_footer;