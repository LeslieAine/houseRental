// builder-registry.js
import { Builder } from '@builder.io/react';
import AboutSection from './components/AboutSection';

Builder.registerComponent(AboutSection, {
  name: 'About Section',
  inputs: [
    { name: 'title', type: 'text', defaultValue: 'Casa Lulu Tulum' },
    {
      name: 'description',
      type: 'longText',
      defaultValue:
        'Located in Aldea Zama in Tulum, Mexico, is a vibrant and eco-friendly community blending luxury living with nature.',
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
    },
    {
      name: 'accentColor',
      type: 'color',
      defaultValue: '#df1f29',
    },
    {
      name: 'welcomeText',
      type: 'longText',
      defaultValue:
        'Welcome to your home in Tulum. Casa Lulu is a beautifully curated tropical sanctuary...',
    },
    {
      name: 'propertyDetails',
      type: 'list',
      subFields: [{ name: 'item', type: 'text' }],
      defaultValue: [
        { item: 'Location: Aldea Zama' },
        { item: 'Lot size: 405sqm' },
        { item: 'Square footage: 347sqm' },
        { item: 'Bedrooms: 4' },
      ],
    },
    {
      name: 'price',
      type: 'text',
      defaultValue: '$1,499,000 USD',
    },
    {
      name: 'footerText',
      type: 'longText',
      defaultValue:
        'Casa Lulu has been hosting and creating memories for the last six years.',
    },
  ],
});
