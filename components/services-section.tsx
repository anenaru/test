import Image from 'next/image'

const services = [
  {
    title: 'Pre-Employment & Coaching',
    image: '/service-coaching.png',
    description:
      'Build confidence and foundational workplace skills. We offer tailored career exploration, job readiness preparation, and pre-employment coaching to get you ready for the workforce.',
  },
  {
    title: 'Employment & Placement',
    image: '/service-placement.png',
    description:
      'Find meaningful work that matches your strengths. We assist individuals in identifying, acquiring, and maintaining employment that aligns with their personal goals, interests, and skills.',
  },
  {
    title: 'Creative Self-Expression',
    image: '/service-culinary.png',
    description:
      'Discover strength and self-expression. Founded by Chef Michelle Jones, we help individuals find alternative paths to healing and fulfillment through a variety of artistic pursuits, including the culinary arts.',
  },
  {
    title: 'Advocacy & Entrepreneurship',
    image: '/service-advocacy.png',
    description:
      'Empowering both hidden and visible disabilities. We teach individuals to advocate for meaningful accommodations in the workplace while fostering entrepreneurial goals for long-term independence.',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-4 border-b border-border px-6 py-14 sm:px-10 md:py-20 lg:px-16"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Services
        </h2>
        <div className="flex items-start md:justify-end">
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            CJ Healing Arts is a Registered Provider of Pre-Employment,
            Employment, and Supported Employment services through the Department
            of Vocational Rehabilitation (VR). We take an individualized
            approach to help you build independence, discover your strengths,
            and achieve long-term self-sufficiency.
          </p>
        </div>
      </div>

      <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <li key={service.title}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
              <Image
                src={service.image || '/placeholder.svg'}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <h3 className="mt-4 text-base font-medium tracking-tight">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
