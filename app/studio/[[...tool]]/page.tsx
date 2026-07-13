'use client'

/**
 * Embedded Sanity Studio at /studio
 * Access it at http://localhost:3000/studio (dev) or https://your-domain.com/studio (prod)
 */

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
