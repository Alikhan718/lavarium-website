import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Lavarium</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Главная</Link></li>
            <li><Link href="#services" className="hover:underline">Услуги</Link></li>
            <li><Link href="#price" className="hover:underline">Прайс</Link></li>
            <li><Link href="#cuisine" className="hover:underline">Кухня</Link></li>
            <li><Link href="#testimonials" className="hover:underline">Отзывы</Link></li>
            <li><Link href="#contact" className="hover:underline">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

