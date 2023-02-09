"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    async RegisterShow({ view }) {
        return view.render('auth/egister');
    }
    async LoginShow({ view }) {
        return view.render('auth/login');
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map