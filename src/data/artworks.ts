import type { ImageMetadata } from 'astro';
import terraCover from '../assets/terra-framed.jpg';
import tectonicCover from '../assets/tectonic-restraint-framed.jpg';

export interface Artwork {
  cover: ImageMetadata | string;
  slug: string;
  title: string;
  height: number;
  width: number;
  price: number;
  materials: string;
  description: string;
  original: string;
  status: 'available' | 'sold';
  // Add a verified, live payment URL only when delivery and tax are configured.
  purchaseUrl?: string;
}

export const artworks: Artwork[] = [
  {
    cover: terraCover, slug: 'terra', title: 'Terra', height: 60, width: 40, price: 7200,
    materials: 'Earth and mineral pigments and locally foraged earth on linen over panel',
    description: 'Hand-drawn geometry meets a scatter of raw earth pigment. Terracotta, ochre and charcoal hold order and dispersal in the same material field.',
    original: '/images/pieces/terra-framed.jpg', status: 'available',
  },
  {
    cover: tectonicCover, slug: 'tectonic-restraint', title: 'Tectonic Restraint', height: 48, width: 36, price: 5100,
    materials: 'Earth and mineral pigments, textile, carbon and mixed media on panel',
    description: 'A compressed material field is interrupted by a displaced fissure. Earth pigment, textile and carbon make the forces held within the surface visible.',
    original: '/images/pieces/tectonic-restraint-framed.jpg', status: 'available',
  },
  {
    cover: '/D0930949-9577-47CE-AB34-37056778E54E.png',
    slug: 'ochre-vespers-study', title: 'Ochre Vespers — Study', height: 16, width: 20, price: 960,
    materials: 'Earth and mineral pigments, mixed media on canvas · Walnut float frame included',
    description: 'A quiet passage of ochre light, mineral water, and emerging vegetation. This original study stands independently while anticipating the larger Ochre Vespers work planned for early 2027.',
    original: '/D0930949-9577-47CE-AB34-37056778E54E.png', status: 'available',
  },
];

export const priceLabel = (price: number) => new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 0,
}).format(price);
