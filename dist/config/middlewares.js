module.exports = [
    'strapi::errors',
    {
        name: 'strapi::cors',
        config: {
            origin: ['http://localhost:8080', 'http://localhost:1337'],
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
