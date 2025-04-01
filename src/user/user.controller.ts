import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Login, Register } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async register(@Body() register: Register) {
    return this.userService.register(register);
  }

  @Post('/login')
  async login(@Body() login: Login) {
    return this.userService.login(login);
  }
}
