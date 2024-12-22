import { Instagram, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Lavarium</h3>
            <p className="text-white">ул. Бухар Жырау, 25а</p>
            <p className="text-white">г. Астана, 010000</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Свяжитесь с нами</h3>
            <p className="text-white flex items-center gap-2">
              <Phone size={18} />
              +7 (701) 520-2701
            </p>
            <p className="text-white">Email: info@lavarium.kz</p>
            <div className="flex gap-4 mt-4">
              <a href="https://instagram.com/lavarium" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/77015202701" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Часы работы</h3>
            <p className="text-white">Понедельник - Пятница: 10:00 - 00:00</p>
            <p className="text-white">Суббота - Воскресенье: 9:00 - 00:00</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-white">&copy; 2025 Lavarium. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

