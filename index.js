module.exports = {

    username: process.env.BASIC_AUTH_USERNAME,
    password: process.env.BASIC_AUTH_PASSWORD,

    message: process.env.BASIC_AUTH_MESSAGE || 'Authentication Required',

    enabled: (request) => true,

    construct(self, options) {
        self.expressMiddleware = {
            when: 'beforeRequired',
            middleware: function(request, response, next) {
                if (!options.enabled(request) || !(options.username && options.password)) {
                    return;
                }

                const { authorization } = request.headers;
                if (authorization && authorization.length > 0) {
                    const base64Auth = authorization.split(' ')[1] || '';
                    const [login, password] = Buffer.from(base64Auth, 'base64').toString().split(':')

                    if (login && password && login === options.username && password === options.password) {
                        return next()
                    }
                }

                response.set('WWW-Authenticate', 'Basic realm="401"')
                response.status(401).send(options.message)
            }
        }
    },
};
