import type { Hours } from './types'

const LUNCH = {
  from: '12:00',
  to: '14:00',
  label: { it: 'Pranzo', en: 'Lunch' },
} as const

const DINNER = {
  from: '19:30',
  to: '22:00',
  label: { it: 'Cena', en: 'Dinner' },
} as const

/**
 * Parma Rotta's published hours: lunch and dinner Tuesday to Saturday, closed
 * Sunday and Monday. Consistent across parma.info, Tripadvisor and the Michelin
 * listing, though one aggregator disagrees about Sunday.
 *
 * `closures` is deliberately empty. Inventing an August shutdown for a real
 * restaurant would put a wrong date in front of their customers, and leaving it
 * empty makes a better demo anyway: adding their real closure in the dashboard
 * is the thing to show them.
 */
export const hours: Hours = {
  week: [
    { day: 2, services: [LUNCH, DINNER] },
    { day: 3, services: [LUNCH, DINNER] },
    { day: 4, services: [LUNCH, DINNER] },
    { day: 5, services: [LUNCH, DINNER] },
    { day: 6, services: [LUNCH, DINNER] },
  ],
  closures: [],
}
