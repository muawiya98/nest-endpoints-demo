"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserService", {
    enumerable: true,
    get: function() {
        return UserService;
    }
});
const _common = require("@nestjs/common");
const _microservices = require("@nestjs/microservices");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let UserService = class UserService {
    onModuleInit() {
        this.userService = this.client.getService('UserService');
    }
    getUser(id) {
        return this.userService.getUser({
            id
        });
    }
    constructor(client){
        this.client = client;
    }
};
UserService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)('USER_PACKAGE')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _microservices.ClientGrpc === "undefined" ? Object : _microservices.ClientGrpc
    ])
], UserService);

//# sourceMappingURL=user.service.js.map