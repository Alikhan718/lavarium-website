import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
      <Image
        src="/placeholder.svg?height=600&width=1600"
        alt="Атмосфера Lavarium"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Добро пожаловать в Lavarium</h1>
        <p className="text-xl md:text-2xl mb-2 text-white">Римская терма & Итальянский ресторан</p>
        <p className="text-lg mb-8 text-white">est. 2022</p>
        <a href="#services" className="bg-accent text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-highlight hover:text-inverse transition duration-300">
          Наши Услуги
        </a>
      </div>
    </section>
  )
}

