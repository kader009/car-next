import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        doctortheme: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#FF3811',
          secondary: 'teal',

          '.btn-primary': {
            'color': '#fff',
          },
          '.btn-outline.btn-primary:hover': {
            'color': '#fff',
          },
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
export default config;
