import Image from 'next/image'

export default function Home() {
  return (
    <main>

      <section className="pb-12 bg-gradient-to-b from-[#1E2128] via-[#1E2128] to-[#1E2128]">
        <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
          <div className="justify-center w-full text-center lg:p-10 max-auto">
            <div className="justify-center w-full mx-auto">

              <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                <Image alt="Víctor Calderón Oyarce" width="160" height="160" className="w-32 h-32 rounded-full border border-[#E8E3F4]" src="/img/vcalderonoyarce.jpg"></Image>
              </div>


              <p className="text-[#FFF] mt-4 sm:px-32 sm:text-xl text-smtracking-tighter">
                &lt;@<span className="text-[var(--accent-color)] accent-color font-semibold">vcalderonoyarce</span> / &gt;
              </p>

              <p className="sm:mt-8 mt-3 sm:px-44 text-[#FFF] text-4xl sm:text-6xl font-semibold tracking-tighter">
                <div className="inline relative">
                  <span className="text-[var(--accent-color)] relative">D</span>
                  esarrollador web <span className="underline leading-8 underline-offset-8	decoration-8 decoration-[var(--accent-color)]">Fullstack</span><span className="accent-color">.</span>
                </div>
              </p>

              <p className="sm:mt-8 mt-2.5 text-[#FFF] sm:px-72  sm:leading-loose text-lg font-normal tracking-tighter">
                Soy un <span className="font-semibold text-[var(--accent-color)] ">desarrollador web fullstack</span>, trabajador <span className="font-semibold">100% remoto</span>, y antiguo <span className="font-semibold">redactor</span> de blog. Adoro construir <span className="font-semibold">web apps</span> que solucionen problemas del mundo real.
              </p>
            </div>
          </div>

        </div>

        <div className="text-center space-x-4 mt-4">
          <button className="bg-[var(--accent-color)] translate-y-1 text-[#fff] sm:text-lg text-xs py-2.5 px-6 rounded-full inline-flex items-center">
            Saber más
          </button>
        </div>

      </section>
    </main>

  )
}
