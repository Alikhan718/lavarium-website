"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

const dishes = [
  { id: 1, name: "Паста Карбонара", image: "/placeholder.svg?height=400&width=600&text=Паста Карбонара" },
  { id: 2, name: "Пицца Маргарита", image: "/placeholder.svg?height=400&width=600&text=Пицца Маргарита" },
  { id: 3, name: "Тирамису", image: "/placeholder.svg?height=400&width=600&text=Тирамису" },
  { id: 4, name: "Ризотто", image: "/placeholder.svg?height=400&width=600&text=Ризотто" },
  { id: 5, name: "Лазанья", image: "/placeholder.svg?height=400&width=600&text=Лазанья" },
]

export default function Cuisine() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const openMenu = () => {
    // This is a placeholder function. In a real application, you would implement
    // the logic to open a PDF file here.
    alert("Открытие меню в PDF (функциональность будет добавлена позже)")
  }

  return (
    <section id="cuisine" className="py-16 bg-[#005B88]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Наша кухня</h2>
        <div className="relative h-96 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={dishes[currentIndex].image}
                alt={dishes[currentIndex].name}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-xl font-semibold">{dishes[currentIndex].name}</h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="text-center">
          <Button onClick={openMenu} className="bg-[#EDE4D6] text-[#005B88] hover:bg-[#8B9B69] hover:text-white">
            Посмотреть меню
          </Button>
        </div>
      </div>
    </section>
  )
}

