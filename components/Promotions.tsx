import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const promotions = [
  { 
    title: "Счастливые часы", 
    description: "Скидка 20% на все услуги с понедельника по четверг с 10:00 до 14:00",
    image: "/placeholder.svg?height=200&width=300&text=Счастливые часы"
  },
  { 
    title: "Романтический вечер", 
    description: "Специальное предложение для пар: терма + ужин со скидкой 15%",
    image: "/placeholder.svg?height=200&width=300&text=Романтический вечер"
  },
  { 
    title: "День рождения в Lavarium", 
    description: "Именинникам скидка 10% на все услуги в течение недели до и после дня рождения",
    image: "/placeholder.svg?height=200&width=300&text=День рождения"
  },
]

export default function Promotions() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Акции и специальные предложения</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <Card key={index} className="overflow-hidden transition-transform duration-300 hover:scale-105">
              <CardHeader className="bg-[#005B88] p-0">
                <Image src={promo.image} alt={promo.title} width={300} height={200} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="bg-[#EDE4D6] p-4">
                <CardTitle className="text-[#005B88] mb-2">{promo.title}</CardTitle>
                <p className="text-[#005B88]">{promo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

