"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = require('./routes');
const log = require('printit')({
    prefix: 'Router',
    date: true
});
function loadRoutes(server) {
    for (let tag in routes) {
        let paths = routes[tag];
        for (let path in paths) {
            let methods = paths[path];
            for (let method in methods) {
                let handler = methods[method];
                let route = {
                    method: method,
                    path: '/' + tag + path,
                    handler: methods[method].handler,
                    config: methods[method]
                };
                route.config.tags = ['api', tag];
                delete route.config.handler;
                server.route(route);
                log.debug('Loaded route ' + method.toUpperCase() + ' ' + route.path);
            }
        }
    }
    log.info('Routes loaded');
}
exports.loadRoutes = loadRoutes;
