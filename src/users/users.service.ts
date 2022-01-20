import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  private users: User[] = [
    { username: "gioboa", userTitle: "T-shaped developer" },
  ];

  create({ username, title: userTitle }: CreateUserDto) {
    return this.users.push({ username, userTitle });
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users[id];
    if (!!user) {
      return user;
    }
    throw new NotFoundException();
  }

  update(id: number, { username, title: userTitle }: UpdateUserDto) {
    return (this.users[id] = { username, userTitle });
  }

  remove(id: number) {
    return this.users.splice(id, 1);
  }
}
