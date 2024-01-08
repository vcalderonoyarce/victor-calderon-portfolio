"use client"
import Image from 'next/image'
import { Fira_Code } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'

const fira_code = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700']
});


export default function Home() {
  return (
    <main>

      <section className="pb-12 bg-gradient-to-b from-[#1f2028] to-[#1f2028]">
        <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
          <div className="justify-center w-full text-center lg:p-10 max-auto">
            <div className="justify-center w-full mx-auto relative">

              <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                <Image alt="Víctor Calderón Oyarce" width="160" height="160" className="rounded-full border border-[#E8E3F4]" src="/images/vcalderonoyarce.jpg"></Image>
              </div>

              <p className="text-[#FFF] mt-4 sm:px-32 sm:text-xl text-smtracking-tighter">
                &lt; @<span className={fira_code.className +" text-[var(--accent-color)] accent-color font-semibold"}>vcalderonoyarce</span> / &gt;
              </p>

              <p className="sm:mt-8 mt-3 sm:px-10 md:px-10 lg:px-44 text-[#FFF] text-3xl sm:text-5xl font-semibold tracking-tighter">
                <span className="inline relative">
                  Desarrollador web &nbsp;
                  <span className="underline leading-8 underline-offset-8	decoration-8 decoration-[var(--accent-color)]">
                    
                    <TypeAnimation
                      sequence={[
                        'Fullstack',
                        1000,
                        'Agile',
                        1000,
                        'Cloud',
                        1000,
                        'NodeJS',
                        1000,
                      ]}
                      speed={50}
                      repeat={0}
                    />

                    </span><span className="text-[var(--accent-color)]">.</span>
                </span>
              </p>

              <p className={fira_code.className + " sm:mt-8 mt-2.5 text-[#FFF] sm:px-10 md:px-50 lg-px-72 sm:leading-loose text-lg font-normal tracking-tighter"}>
                Soy un <span className="font-semibold text-[var(--accent-color)] ">{"{"}
                 web developer{"}"}</span> con más de 10 años de experiencia.
                Me encanta construir <span className="font-semibold">web apps</span> que solucionen problemas del mundo real 🌎. 
              </p>

              <div className='text-center space-x-3 mt-6'>
                <div className="rounded-full shadow-2xl bg-gradient-to-tr from-[#17191e] to-[#17191e] p-1 inline-block">
                  <Image src="/images/technologies/sass.svg" alt="NodeJS" width="18" height="18"></Image>
                </div>
                <div className="rounded-full shadow-2xl bg-gradient-to-tr from-[#17191e] to-[#17191e] p-1 inline-block">
                  <Image src="/images/technologies/google-cloud.svg" alt="NodeJS" width="18" height="14"></Image>
                </div>

                <div className="rounded-full shadow-2xl bg-gradient-to-tr from-[#17191e] to-[#17191e] p-1 inline-block">
                  <Image src="/images/technologies/nodejs.svg" alt="NodeJS" width="18" height="18"></Image>
                </div>

                <div className="rounded-full shadow-2xl bg-gradient-to-tr from-[#17191e] to-[#17191e] p-1 inline-block">
                  <Image src="/images/technologies/reactjs.svg" alt="NodeJS" width="18" height="18"></Image>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="text-center mt-4">
          <button className="bg-[var(--accent-color)] translate-y-1 text-[#fff] sm:text-lg text-xs py-2.5 px-6 rounded-full inline-flex items-center">
            Saber más
          </button>
        </div>

      </section>

      <section className='pb-16 pt-16 bg-gradient-to-b from-[red] to-[red]'>
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-2 gap-4 items-center">
                <div className="pt-10 pb-10">
                  <h1 className="text-[#FFF] text-2xl sm:text-4xl font-semibold tracking-tighter">Tecnologías</h1>
                </div>
                <div className="pt-10 pb-10">
                  <div className="live-editor">
                        
                  

                  </div>
                </div>
            </div>
          </div>
      </section>

    </main>

  )
}
