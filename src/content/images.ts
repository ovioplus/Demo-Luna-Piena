import type { StaticImageData } from 'next/image'
import cellar from '../../public/images/cellar.jpg'
import chef from '../../public/images/chef.jpg'
import chocolate from '../../public/images/chocolate.jpg'
import fire from '../../public/images/fire.jpg'
import fireside from '../../public/images/fireside.jpg'
import grill from '../../public/images/grill.jpg'
import hearth from '../../public/images/hearth.jpg'
import interior from '../../public/images/interior.jpg'
import pasta from '../../public/images/pasta.jpg'
import room from '../../public/images/room.jpg'
import salumi from '../../public/images/salumi.jpg'
import type { GalleryImage } from './types'

/**
 * ============================================================================
 * SINGLE SWAP POINT FOR PHOTOGRAPHY.
 * ============================================================================
 * These are **not** Parma Rotta's photographs. Their site blocks automated
 * access, and reproducing a restaurant's own images on a third-party demo is
 * not ours to do. These are licence-free stand-ins under the Unsplash License,
 * chosen to match what Parma Rotta actually is: an open fire, meat over wood,
 * rolled pasta, a vaulted cellar, a farmhouse dining room.
 *
 * **Ask them for their own photographs.** It is the single change that will
 * most improve this, and handing a restaurant their own room back in a new
 * design is the most persuasive thing in a pitch.
 *
 * Imported statically rather than pathed, so Next generates a blurred
 * placeholder and the intrinsic size at build time. Swapping is unchanged:
 * drop a file in under the same name. After swapping, delete
 * `.next/cache/images` or the optimiser serves the old bytes.
 * ============================================================================
 */

export const images = {
  /** Home hero: the open fire the room is built around. */
  hero: hearth,
  chef,
  room,
  /** Menu page header. */
  menuAside: fire,
  reservations: fireside,
  contact: interior,
  homeDishPrimary: grill,
  homeDishSecondary: pasta,
} satisfies Record<string, StaticImageData>

export const gallery: readonly GalleryImage[] = [
  {
    id: 'fire',
    src: fire,
    alt: { it: 'Carne sulla griglia a legna', en: 'Meat over the wood fire' },
    caption: { it: 'Castagno, carpino, faggio', en: 'Chestnut, hornbeam, beech' },
    orientation: 'portrait',
  },
  {
    id: 'room',
    src: room,
    alt: { it: 'La sala sotto le volte a botte', en: 'The dining room beneath the barrel vaults' },
    caption: { it: 'L’antica casa colonica', en: 'The old farmhouse' },
    orientation: 'landscape',
  },
  {
    id: 'grill',
    src: grill,
    alt: { it: 'Costata di bue tagliata', en: 'Sliced beef rib' },
    orientation: 'square',
  },
  {
    id: 'chef',
    src: chef,
    alt: { it: 'Le mani alla brace', en: 'Hands at the fire' },
    caption: { it: 'Girata una volta sola', en: 'Turned once and once only' },
    orientation: 'portrait',
  },
  {
    id: 'pasta',
    src: pasta,
    alt: { it: 'Tortelli tirati a mano', en: 'Hand-rolled tortelli' },
    orientation: 'landscape',
  },
  {
    id: 'salumi',
    src: salumi,
    alt: { it: 'Salumi parmigiani al tagliere', en: 'Parma cured meats on the board' },
    caption: { it: 'Con la torta fritta', en: 'With hot torta fritta' },
    orientation: 'portrait',
  },
  {
    id: 'chocolate',
    src: chocolate,
    alt: { it: 'Cioccolato della pasticceria', en: 'Chocolate from the pastry room' },
    orientation: 'square',
  },
  {
    id: 'cellar',
    src: cellar,
    alt: { it: 'La cantina ipogea', en: 'The underground cellar' },
    caption: { it: 'Oltre mille etichette', en: 'Over a thousand labels' },
    orientation: 'landscape',
  },
  {
    id: 'fireside',
    src: fireside,
    alt: { it: 'La sala accanto al camino', en: 'The room beside the fireplace' },
    orientation: 'portrait',
  },
]
