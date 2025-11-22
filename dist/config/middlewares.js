module.exports = [
    'strapi::errors',
    {
        name: 'strapi::cors',
        config: {
            origin: [
                'https://vulcan-sky.vercel.app',
                'http://localhost:8080',
                'https://www.flyvulcan.co.za',
                'https://flyvulcan.co.za', // ⬅️ add non-www as well
            ],
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
            headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
            credentials: true,
            keepHeadersOnError: true, // ⬅️ helps debug CORS issues
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
