import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Login, Register } from './dto/user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: Register) {
    const hashPassword = await bcrypt.hash(data.password, 10);

    const isRegistered = await this.prisma.user.count({
      where: { name: data.name },
    });
    if (isRegistered)
      throw new HttpException(
        'user already registered',
        HttpStatus.BAD_REQUEST,
      );

    const user = await this.prisma.user.create({
      data: { ...data, password: hashPassword },
    });

    return {
      message: `User ${data.name} successfully registered`,
      data: { name: data.name },
    };
  }

  async login(data: Login) {
    const user = await this.prisma.user.findUnique({
      where: { name: data.name },
    });

    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new HttpException(
        'Invalid username or password',
        HttpStatus.BAD_REQUEST,
      );
    }

    const payload = { id: user.id };

    const token = this.jwtService.sign(payload, { expiresIn: '1d' });
    const refresh = this.jwtService.sign(payload, { expiresIn: '7d' });

    return {
      message: `User ${user.name} successfully login`,
      data: { access_token: token, refresh_token: refresh },
    };
  }
}
