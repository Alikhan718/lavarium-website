"use client"

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function AttractionText() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-16 bg-[#EDE4D6] text-[#005B88]">
      <div className="container mx-auto px-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6">Погрузитесь в мир роскоши и релаксации</h2>
          <p className="text-xl text-center mb-8">
            Lavarium - это не просто баня, это настоящее путешествие в мир древнеримских терм и итальянской кухни.
            Позвольте себе отдохнуть от суеты, восстановить силы и насладиться каждым моментом в нашем уникальном комплексе.
          </p>
          <p className="text-2xl font-semibold text-center">
            Откройте для себя Lavarium - ваш личный оазис спокойствия и наслаждения!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

