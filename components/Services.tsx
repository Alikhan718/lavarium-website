export default function Services() {
  const services = [
    { name: 'Римская терма', description: 'Традиционная римская баня' },
    { name: 'Итальянский ресторан', description: 'Изысканная итальянская кухня' },
    { name: 'Массаж', description: 'Различные виды массажа для релаксации' },
    { name: 'СПА-процедуры', description: 'Уходовые процедуры для лица и тела' },
  ]

  return (
    <section id="services" className="py-16 bg-inverse">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Наши Услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#005B88] p-6 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-white">{service.name}</h3>
              <p className="text-[#EDE4D6]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

