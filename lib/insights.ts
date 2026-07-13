export type InsightPost = {
  slug: string
  title: string
  author: string
  date: string
  image: string
  excerpt: string
  content: string[]
}

export const insightPosts: InsightPost[] = [
  {
    slug: 'building-a-resume-that-opens-doors',
    title: 'Building a Resume That Opens Doors',
    author: 'Michelle Jones',
    date: 'October 15, 2025',
    image: '/insights/resume.png',
    excerpt:
      'A practical guide to translating your unique strengths and experiences into a resume that helps employers see your potential.',
    content: [
      'Your resume is often the first impression an employer has of you, and it should reflect not just where you have been, but where you are capable of going. At CJ Healing Arts, we work with each individual to identify the strengths that make them stand out.',
      'Start by focusing on accomplishments rather than duties. Instead of listing responsibilities, describe the impact you made and the skills you used to get there. Concrete examples help employers picture you succeeding in their workplace.',
      'Do not shy away from including volunteer work, training programs, and personal projects. These experiences demonstrate initiative, reliability, and a willingness to grow, all qualities that matter deeply to employers.',
      'Finally, tailor your resume to each opportunity. A focused, well organized document that speaks directly to a role will always outperform a generic one. Our pre-employment coaching team is here to help you refine every detail.',
    ],
  },
  {
    slug: 'five-steps-toward-independent-living',
    title: 'Five Steps Toward Independent Living',
    author: 'David Kim',
    date: 'September 18, 2025',
    image: '/insights/independent-living.png',
    excerpt:
      'Independence grows one habit at a time. Here are five approachable steps to build confidence in day-to-day life.',
    content: [
      'Independent living is not a single milestone but a series of small, achievable steps. Each new skill builds confidence and creates momentum toward greater self-sufficiency.',
      'Begin with routines. Predictable daily structures for meals, rest, and personal care create stability and free up mental energy for bigger goals. A simple written schedule can make a meaningful difference.',
      'Next, practice budgeting. Understanding how money flows in and out each month is one of the most empowering skills a person can develop. Start small and expand as your comfort grows.',
      'Build a support network, learn to use community transportation, and celebrate progress along the way. Independence is a journey best traveled with encouragement, and our team is proud to walk it with you.',
    ],
  },
  {
    slug: 'everyday-practices-for-mental-wellness',
    title: 'Everyday Practices for Mental Wellness',
    author: 'Elena Rodriguez',
    date: 'October 5, 2025',
    image: '/insights/wellness.png',
    excerpt:
      'Small, consistent wellness practices can have a powerful effect on how we navigate work, relationships, and growth.',
    content: [
      'Mental wellness is foundational to everything else we hope to achieve. When we care for our minds, we are better equipped to pursue our goals with clarity and resilience.',
      'Simple breathing exercises, taken for just a few minutes each day, can lower stress and help you feel more grounded. Pair them with regular movement and time outdoors for an even greater effect.',
      'Connection matters too. Reaching out to a friend, mentor, or counselor reminds us that we do not have to carry challenges alone. Community is one of the strongest protective factors for well-being.',
      'Be patient and kind with yourself. Progress is rarely linear, and every small act of self-care is a meaningful investment in your future.',
    ],
  },
  {
    slug: 'discovering-yourself-through-creative-expression',
    title: 'Discovering Yourself Through Creative Expression',
    author: 'Michelle Jones',
    date: 'August 22, 2025',
    image: '/insights/art-therapy.png',
    excerpt:
      'From painting to the culinary arts, creative expression can be a powerful path toward healing and self-discovery.',
    content: [
      'Creativity is not reserved for a chosen few. Every person has the capacity to express themselves, and doing so can be one of the most healing experiences available to us.',
      'Whether through painting, music, writing, or cooking, creative work invites us to process emotions, tell our stories, and connect with others in authentic ways.',
      'As a chef, I have seen firsthand how the culinary arts can restore confidence and purpose. Preparing a meal becomes a form of self-expression, patience, and pride.',
      'You do not need to be an expert to begin. Start with what brings you joy, stay curious, and allow the process itself to be the reward.',
    ],
  },
  {
    slug: 'advocating-for-workplace-accommodations',
    title: 'Advocating for Workplace Accommodations',
    author: 'James Patterson',
    date: 'July 8, 2025',
    image: '/insights/advocacy.png',
    excerpt:
      'Knowing your rights and communicating your needs with confidence can transform your experience in the workplace.',
    content: [
      'Every worker deserves an environment where they can succeed. Reasonable accommodations are not special treatment, they are tools that allow people to contribute their full talents.',
      'Start by understanding your rights. Laws exist to protect workers with disabilities, and knowing them gives you a firm foundation from which to advocate for yourself.',
      'When requesting an accommodation, be clear and specific about what you need and how it helps you perform your role. Framing the conversation around productivity benefits everyone involved.',
      'Remember that advocacy is a skill that grows with practice. Our team helps individuals prepare for these conversations so they can enter the workplace with confidence and clarity.',
    ],
  },
]

export function getPostBySlug(slug: string): InsightPost | undefined {
  return insightPosts.find((post) => post.slug === slug)
}
