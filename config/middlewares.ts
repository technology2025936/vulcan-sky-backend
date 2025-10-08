module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://vulcan-sky.vercel.app', // ✅ your live frontend
        'http://localhost:8080',         // for local testing
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true,
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
