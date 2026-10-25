import type { Menu } from './types'

/**
 * ILLUSTRATIVE MENU for the Parma Rotta pitch.
 *
 * The dishes are the ones Parma Rotta is publicly reported to serve: the
 * anolini in brodo, the tortelli di erbette, the lasagna, the cuts off the
 * wood grill, Jessica's chocolate, the culatello from Spigaroli. The
 * descriptions, the prices and the two set menus are **invented and plausible,
 * not theirs.** Nobody published their price list and inventing one is the
 * fastest way to look careless in a pitch, so say so when you present it, and
 * replace it with their real card the moment they hand it over.
 *
 * Allergens are a legal declaration (EU 1169/2011) and these are a best guess
 * from the dish names. They must be confirmed by the kitchen before this is
 * ever anything other than a demo.
 */
export const menu: Menu = {
  tastingMenus: [
    {
      id: 'tradizione',
      name: { it: 'Tradizione', en: 'Tradition' },
      description: {
        it: 'La parte di Parma che si fa con la sfoglia: anolini, tortelli, lasagna, e un dolce dalla vetrina.',
        en: 'The part of Parma that is made with rolled pasta: anolini, tortelli, lasagna, and one sweet from the window.',
      },
      courses: 4,
      price: 55,
      pairingPrice: 30,
    },
    {
      id: 'la-brace',
      name: { it: 'La Brace', en: 'The Fire' },
      description: {
        it: 'Un percorso sulla griglia a legna, dai tagli di maiale al bue, con contorni di stagione.',
        en: 'A path across the wood grill, from the pork cuts to the beef, with whatever the season gives.',
      },
      courses: 4,
      price: 75,
      pairingPrice: 40,
    },
  ],

  sections: [
    {
      id: 'antipasti',
      title: { it: 'Antipasti', en: 'To begin' },
      dishes: [
        {
          id: 'culatello',
          name: {
            it: 'Culatello di Zibello, torta fritta calda',
            en: 'Culatello di Zibello, hot torta fritta',
          },
          description: {
            it: 'La torta fritta esce dalla friggitrice e va in tavola. Non aspetta.',
            en: 'The torta fritta comes out of the fryer and goes straight to the table. It does not wait.',
          },
          price: 22,
          allergens: ['gluten'],
          signature: true,
        },
        {
          id: 'parmigiano',
          name: {
            it: 'Parmigiano Reggiano 36 mesi, mostarda',
            en: 'Parmigiano Reggiano, 36 months, mostarda',
          },
          description: {
            it: 'A scaglie, a temperatura di cantina.',
            en: 'In shards, at cellar temperature.',
          },
          price: 16,
          allergens: ['milk', 'sulphites'],
        },
        {
          id: 'vitello-tonnato',
          name: {
            it: 'Vitello tonnato, capperi',
            en: 'Vitello tonnato, capers',
          },
          description: {
            it: 'La salsa è montata al momento.',
            en: 'The sauce is whipped to order.',
          },
          price: 18,
          allergens: ['fish', 'eggs'],
        },
      ],
    },
    {
      id: 'primi',
      title: { it: 'Primi', en: 'Pasta' },
      dishes: [
        {
          id: 'anolini',
          name: {
            it: 'Anolini in brodo di manzo e gallina',
            en: 'Anolini in beef and hen broth',
          },
          description: {
            it: 'Lo stracotto dentro, il brodo chiaro intorno. Il piatto di Parma.',
            en: 'The braise inside, the clear broth around it. The dish of Parma.',
          },
          price: 18,
          allergens: ['gluten', 'eggs', 'milk', 'celery'],
          signature: true,
        },
        {
          id: 'tortelli',
          name: {
            it: 'Tortelli di erbette e ricotta vaccina',
            en: 'Tortelli of erbette and cow’s ricotta',
          },
          description: {
            it: 'Burro e parmigiano, niente altro.',
            en: 'Butter and parmigiano, nothing else.',
          },
          price: 16,
          allergens: ['gluten', 'eggs', 'milk'],
          signature: true,
        },
        {
          id: 'lasagna',
          name: {
            it: 'Lasagna al ragù di bue',
            en: 'Lasagna with beef ragù',
          },
          description: {
            it: 'Sfoglia sottile, ragù lungo, crosta sui bordi.',
            en: 'Thin sheets, a long ragù, crisp at the edges.',
          },
          price: 17,
          allergens: ['gluten', 'eggs', 'milk', 'celery'],
        },
        {
          id: 'pappardelle',
          name: {
            it: 'Pappardelle ai porcini',
            en: 'Pappardelle with porcini',
          },
          description: {
            it: 'Solo quando ci sono. Da settembre, finché durano.',
            en: 'Only when there are any. From September, while they last.',
          },
          price: 20,
          allergens: ['gluten', 'eggs'],
        },
      ],
    },
    {
      id: 'brace',
      title: { it: 'La brace', en: 'From the fire' },
      dishes: [
        {
          id: 'costata',
          name: {
            it: 'Costata di bue, sale rosa dell’Himalaya',
            en: 'Beef rib, Himalayan pink salt',
          },
          description: {
            it: 'Castagno, carpino e faggio. Girata una volta sola.',
            en: 'Chestnut, hornbeam and beech. Turned once and once only.',
          },
          price: 42,
          allergens: [],
          signature: true,
        },
        {
          id: 'tomahawk',
          name: {
            it: 'Tomahawk di maiale tigrinto',
            en: 'Tigrinto pork tomahawk',
          },
          description: {
            it: 'Una razza che tiene il grasso dove serve.',
            en: 'A breed that keeps its fat where it is useful.',
          },
          price: 34,
          allergens: [],
        },
        {
          id: 'secreto',
          name: {
            it: 'Secreto di Patanegra',
            en: 'Patanegra secreto',
          },
          description: {
            it: 'Il taglio che il macellaio teneva per sé.',
            en: 'The cut the butcher used to keep for himself.',
          },
          price: 32,
          allergens: [],
        },
        {
          id: 'costine-agnello',
          name: {
            it: 'Costine di agnello',
            en: 'Lamb ribs',
          },
          description: {
            it: 'Rosmarino e niente fretta.',
            en: 'Rosemary and no hurry.',
          },
          price: 30,
          allergens: [],
        },
        {
          id: 'fiorentina',
          name: {
            it: 'Fiorentina',
            en: 'Fiorentina',
          },
          description: {
            it: 'Al peso, per due. Chiedete al maître cosa c’è oggi.',
            en: 'By weight, for two. Ask the maître what came in today.',
          },
          price: null,
          allergens: [],
        },
      ],
    },
    {
      id: 'dolci',
      title: { it: 'Dolci', en: 'To finish' },
      dishes: [
        {
          id: 'cioccolato',
          name: {
            it: 'Cioccolato della casa',
            en: 'Our own chocolate',
          },
          description: {
            it: 'Dalla vetrina della pasticceria, che si vede entrando.',
            en: 'From the pastry window you walk past on the way in.',
          },
          price: 10,
          allergens: ['milk', 'soy'],
          signature: true,
        },
        {
          id: 'gelato-latte',
          name: {
            it: 'Gelato di latte',
            en: 'Milk gelato',
          },
          description: {
            it: 'Il latte arriva da una stalla qui vicino.',
            en: 'The milk comes from a dairy down the road.',
          },
          price: 8,
          allergens: ['milk'],
        },
        {
          id: 'zuppa-inglese',
          name: {
            it: 'Zuppa inglese',
            en: 'Zuppa inglese',
          },
          description: {
            it: 'Come si faceva, con l’alchermes.',
            en: 'The way it used to be made, with alchermes.',
          },
          price: 9,
          allergens: ['gluten', 'eggs', 'milk', 'sulphites'],
        },
      ],
    },
  ],

  notes: [
    {
      it: 'I tagli alla brace cambiano con quello che arriva. Il maître vi dice cosa c’è stasera.',
      en: 'The cuts on the fire change with what comes in. The maître will tell you what there is tonight.',
    },
    {
      it: 'Segnalate allergie e intolleranze al momento della prenotazione, non all’arrivo.',
      en: 'Tell us about allergies and intolerances when you book, not when you arrive.',
    },
    {
      it: 'La cantina conta oltre mille etichette. Chiedete ad Alfonso.',
      en: 'The cellar holds over a thousand labels. Ask Alfonso.',
    },
  ],
}
