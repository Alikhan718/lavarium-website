import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const prices = [
  { service: "Посещение римской термы (2 часа)", price: "5000 ₸" },
  { service: "Массаж классический (60 мин)", price: "8000 ₸" },
  { service: "СПА-программа 'Римский патриций' (120 мин)", price: "15000 ₸" },
  { service: "Ужин в итальянском ресторане (на персону)", price: "от 7000 ₸" },
]

export default function PriceList() {
  return (
    <section className="py-16 bg-[#005B88] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Прайс-лист</h2>
        <Table className="bg-[#EDE4D6] rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead className="w-2/3 text-[#005B88]">Услуга</TableHead>
              <TableHead className="w-1/3 text-[#005B88]">Цена</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prices.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-[#005B88]">{item.service}</TableCell>
                <TableCell className="text-[#005B88]">{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

