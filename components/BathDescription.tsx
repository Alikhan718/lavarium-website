export default function BathDescription() {
  return (
    <section className="py-16 bg-[#005B88] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Наша Римская терма</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <p className="text-[#EDE4D6] mb-4">
              Погрузитесь в атмосферу древнего Рима в нашей аутентичной римской терме. Насладитесь целебными свойствами
              термальных вод, расслабьтесь в парной и освежитесь в прохладном бассейне.
            </p>
            <p className="text-[#EDE4D6]">
              Наши опытные мастера предложат вам различные виды массажа и СПА-процедур, которые помогут восстановить
              силы и обрести гармонию души и тела.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <video
              className="w-full rounded-lg shadow-lg"
              controls
              poster="/placeholder.svg?height=400&width=600"
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео тег.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

