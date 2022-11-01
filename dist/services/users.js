"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const faker_1 = require("@faker-js/faker");
const number_1 = require("../utils/number");
class UsersService {
    static getAll() {
        const index = number_1.NumbersManager.getRandomInt(300);
        const foo = [];
        for (var i = 1; i <= index; i++) {
            foo.push(this.getUser());
        }
        return foo;
    }
    static getUser(id) {
        const data = {
            id: !id ? faker_1.faker.datatype.number({ max: 10000 }) : id,
            uuid: faker_1.faker.datatype.uuid(),
            avatar: faker_1.faker.image.avatar(),
            birthday: faker_1.faker.date.birthdate(),
            email: faker_1.faker.internet.email(),
            firstName: faker_1.faker.name.firstName(),
            lastName: faker_1.faker.name.lastName(),
            sex: faker_1.faker.name.sexType(),
            subscriptionTier: faker_1.faker.helpers.arrayElement([
                "free",
                "basic",
                "business",
            ]),
        };
        return data;
    }
}
exports.UsersService = UsersService;
