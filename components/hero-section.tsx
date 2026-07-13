import Image from 'next/image'

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-4">
      {/* Banner */}
      <div className="relative aspect-[16/7] w-full overflow-hidden bg-muted sm:aspect-[21/8]">
        <Image
          src="/hero.png"
          alt="CJ Healing Arts logo beside an illustration of a smiling woman with braids"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, calc(100vw - 16rem)"
        />
      </div>

      {/* Intro */}
      <div className="grid gap-8 border-b border-border px-6 py-14 sm:px-10 md:grid-cols-2 md:py-20 lg:px-16">
        <h1 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Bridging Ability with Opportunity
        </h1>
        <div className="flex items-start md:justify-end">
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            We assist individuals with learning, mental health, or physical
            disabilities in achieving self-sufficiency through career
            exploration, job readiness, and artistic self-expression.
          </p>
        </div>
      </div>
    </section>
  )
}
