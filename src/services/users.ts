import { faker } from "@faker-js/faker";
import { NumbersManager } from "../utils/number";
export class UsersService {
  static getAll() {
    const index = NumbersManager.getRandomInt(300);
    const foo: any[] = [];
    for (var i = 1; i <= index; i++) {
      foo.push(this.getUser());
    }
    return foo;
  }

  static getUser(id?: number) {
    const data = {
      id: !id ? faker.datatype.number({ max: 10000 }) : id,
      uuid: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      sex: faker.name.sexType(),
      subscriptionTier: faker.helpers.arrayElement([
        "free",
        "basic",
        "business",
      ]),
    };
    return data;
  }
}
