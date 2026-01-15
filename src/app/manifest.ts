import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: siteConfig.defaultBranding.primaryColor,
    orientation: 'portrait-primary',
    categories: ['food', 'restaurant', 'lifestyle', 'shopping'],
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/menu.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Digital Menu View',
      },
      {
        src: '/screenshots/ordering.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Mobile Ordering',
      },
    ],
    shortcuts: [
      {
        name: 'View Menu',
        short_name: 'Menu',
        description: 'Browse our digital menu',
        url: '/menu',
        icons: [{ src: '/icons/menu-icon.png', sizes: '192x192' }],
      },
      {
        name: 'Order Online',
        short_name: 'Order',
        description: 'Place an order for delivery or pickup',
        url: '/order',
        icons: [{ src: '/icons/order-icon.png', sizes: '192x192' }],
      },
      {
        name: 'Reserve Table',
        short_name: 'Reserve',
        description: 'Book a table',
        url: '/reserve',
        icons: [{ src: '/icons/reserve-icon.png', sizes: '192x192' }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
