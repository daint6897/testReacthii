var echo = require('laravel-echo-server/dist');

echo.run({
    "appKey": "[app-key]",
    "authEndpoint": "/broadcasting/auth",
    "authHost": null,
    "database": "redis",
    "databaseConfig": {
        "redis": {},
        "sqlite": {
            "databasePath": "/database/laravel-echo-server.sqlite"
        }
    },
    "devMode": false,
    "host": "localhost",
    "port": "8001",
    "protocol": "http",
    "referrers": [],
    "sslCertPath": "",
    "sslKeyPath": "",
    "verifyAuthPath": true,
    "verifyAuthServer": false
});