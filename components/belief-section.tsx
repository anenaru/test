import Image from 'next/image'

export function BeliefSection() {
  return (
    <section
      id="about"
      className="grid gap-8 border-b border-border px-6 py-14 sm:px-10 md:grid-cols-2 md:py-20 lg:px-16"
    >
      <div>
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Our Belief
        </h2>
        <div className="mt-8 h-56 w-56 overflow-hidden rounded-full">
          <Image
            src="/belief.jpg"
            alt="A CJ Healing Arts advocate meeting with a community leader"
            width={320}
            height={320}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex items-start md:justify-end">
        <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          The world needs contributions from people of all abilities. We take an
          individualized approach, matching each person&apos;s unique talents,
          hopes, and dreams with a path that leads them to achieve.
        </p>
      </div>
    </section>
  )
}
