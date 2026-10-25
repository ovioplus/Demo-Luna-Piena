import type { Restaurant } from './types'

/**
 * ============================================================================
 * DEMO CONTENT FOR A REAL RESTAURANT. Read before changing anything.
 * ============================================================================
 * Parma Rotta is a real restaurant in Parma. This is a pitch mock-up built for
 * them, not their site and not affiliated with them.
 *
 * The facts below (address, phone, email, the chef and his family's roles, the
 * origin of the name, the woods used on the grill) come from public sources:
 * parmawelcome.it, parma.info, lamadia.com and the Michelin guide listing.
 * Their own site blocks automated access, so nothing here was taken from it.
 *
 * Two things deliberately NOT claimed, because they would be false:
 *
 *   - **No Michelin star.** Parma Rotta holds a Michelin *Plate*, which is a
 *     guide listing, not a star. `michelinStars` is 0 and the copy says
 *     "Piatto Michelin".
 *   - **No founding year.** Sources disagree (1968 in one listing, 1984 on
 *     their own site for the wood-fired cooking). The copy refers to the chef's
 *     forty years instead, which is consistently reported.
 *
 * `chef.quote` is the house voice, not words attributed to Antonio Di Vita.
 * Do not put invented words in a real person's mouth. Replace it with
 * something he actually said before this is shown as finished work.
 * ============================================================================
 */
export const restaurant: Restaurant = {
  name: 'Parma Rotta',
  legalName: 'Ristorante Parma Rotta',

  tagline: {
    it: 'Carne alla brace e tradizione emiliana',
    en: 'Wood-fired meat and Emilian tradition',
  },

  statement: {
    it: 'Il nome viene dal punto in cui il torrente Parma rompeva gli argini e allagava la campagna. Quello che da allora non è cambiato è il fuoco: castagno, carpino e faggio, e sopra la carne.',
    en: 'The name comes from the point where the Parma torrent used to break its banks and flood the fields. What has not changed since is the fire: chestnut, hornbeam and beech, and the meat above it.',
  },

  chef: {
    name: 'Antonio Di Vita',
    role: {
      it: 'Chef patron',
      en: 'Chef patron',
    },
    bio: [
      {
        it: 'Antonio Di Vita sta alla brace di Parma Rotta da quarant’anni. La cucina è di famiglia nel senso letterale: Lorella in sala, Jessica alla pasticceria, Lara in amministrazione, Alfonso maître e sommelier.',
        en: 'Antonio Di Vita has worked the fire at Parma Rotta for forty years. The kitchen is a family one in the literal sense: Lorella runs the dining room, Jessica the pastry, Lara the office, Alfonso is maître and sommelier.',
      },
      {
        it: 'La sala è un’antica casa colonica e lo si vede: travi a vista, volte a botte, muri spessi e un camino aperto che è il centro di tutto. Cento coperti fra le sale, il giardino e la terrazza.',
        en: 'The dining room is an old farmhouse and it shows: exposed beams, barrel vaults, thick walls, and an open fireplace that everything else arranges itself around. A hundred covers across the rooms, the garden and the terrace.',
      },
      {
        it: 'Sotto, la cantina ipogea tiene oltre mille etichette. Sopra, la vetrina della pasticceria, dove Jessica lavora soprattutto il cioccolato.',
        en: 'Below, the underground cellar holds over a thousand labels. Above it, the pastry window, where Jessica works mostly in chocolate.',
      },
    ],
    quote: {
      it: 'Quarant’anni sulla stessa brace, con la stessa famiglia in sala.',
      en: 'Forty years over the same fire, with the same family in the dining room.',
    },
    portrait: '/images/chef.jpg',
  },

  address: {
    street: 'Strada Langhirano 158',
    postalCode: '43124',
    city: 'Parma',
    country: 'IT',
    lat: 44.7733,
    lng: 10.3261,
  },

  phone: '+39 0521 966738',
  email: 'prenotazioni@parmarotta.com',
  /** Michelin Plate, not a star. See the note at the top of this file. */
  michelinStars: 0,

  social: {
    instagram: 'parma_rotta',
  },
}
