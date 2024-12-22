"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { id: 1, name: "Анна С.", text: "Потрясающий опыт в римской терме! Отличное обслуживание и расслабляющая атмосфера." },
  { id: 2, name: "Михаил Д.", text: "Ресторан превзошел все ожидания. Блюда итальянской кухни просто восхитительны!" },
  { id: 3, name: "Елена В.", text: "Идеальное место для отдыха. СПА-процедуры помогли мне полностью расслабиться." },
  { id: 4, name: "Сергей К.", text: "Великолепное сочетание бани и ресторана. Обязательно вернусь снова!" },
  { id: 5, name: "Ольга П.", text: "Массаж был просто божественным. Персонал очень внимательный и профессиональный." },
]

export default function Testimonials() {
  const [activeTestimonials, setActiveTestimonials] = useState(testimonials.slice(0, 3))

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonials(prev => {
        const nextIndex = (testimonials.findIndex(t => t.id === prev[2].id) + 1) % testimonials.length
        return [...prev.slice(1), testimonials[nextIndex]]
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Отзывы наших гостей</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTestimonials.map((testimonial, index) => (
            <AnimatePresence key={testimonial.id} mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-[#005B88] text-white h-full">
                  <CardContent className="p-6">
                    <p className="mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  )
}

