"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  { id: 1, src: "/placeholder.svg?height=300&width=400&text=Римская терма", alt: "Римская терма" },
  { id: 2, src: "/placeholder.svg?height=300&width=400&text=Итальянский ресторан", alt: "Итальянский ресторан" },
  { id: 3, src: "/placeholder.svg?height=300&width=400&text=СПА-процедуры", alt: "СПА-процедуры" },
  { id: 4, src: "/placeholder.svg?height=300&width=400&text=Массажный кабинет", alt: "Массажный кабинет" },
  { id: 5, src: "/placeholder.svg?height=300&width=400&text=Бассейн", alt: "Бассейн" },
  { id: 6, src: "/placeholder.svg?height=300&width=400&text=Сауна", alt: "Сауна" },
]

export default function Gallery() {
  const [activeImages, setActiveImages] = useState(images.slice(0, 4))

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImages(prev => {
        const nextIndex = (images.findIndex(img => img.id === prev[3].id) + 1) % images.length
        return [...prev.slice(1), images[nextIndex]]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-inverse">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Галерея</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeImages.map((image, index) => (
            <AnimatePresence key={image.id} mode="wait">
              <motion.div
                key={image.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-64 overflow-hidden rounded-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  )
}

