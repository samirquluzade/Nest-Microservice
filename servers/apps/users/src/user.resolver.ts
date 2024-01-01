import {
  ActivationResponse,
  ForgotPasswordResponse,
  LoginResponse,
  RegisterResponse,
} from './types/user.types';
import { UsersService } from './users.service';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ActivationDto, forgotPasswordDto, RegisterDto } from './dto/user.dto';
import { BadRequestException, UseGuards } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Response } from 'express';
import { AuthGuard } from './guards/auth.guard';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerDto') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please fill the all fields');
    }

    const { activation_token } = await this.userService.register(
      registerDto,
      context.res,
    );

    return { activation_token };
  }

  @Mutation(() => ActivationResponse)
  async activateUser(
    @Args('activationDto') activationDto: ActivationDto,
    @Context() context: { res: Response },
  ): Promise<ActivationResponse> {
    return await this.userService.activateUser(activationDto, context.res);
  }

  @Mutation(() => LoginResponse)
  async Login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<LoginResponse> {
    return await this.userService.Login({ email, password });
  }

  @Query(() => LoginResponse)
  @UseGuards(AuthGuard)
  async getLoggedInUser(@Context() context: { req: Request }) {
    return await this.userService.getLoggedInUser(context.req);
  }

  @Query(() => LoginResponse)
  @UseGuards(AuthGuard)
  async get(@Context() context: { req: Request }) {
    return await this.userService.getLoggedInUser(context.req);
  }

  @Query(() => ForgotPasswordResponse)
  async forgotPassword(
    @Args('forgotPasswordDto') forgotPasswordDto: forgotPasswordDto,
  ): Promise<ForgotPasswordResponse> {
    return await this.userService.forgotPassword(forgotPasswordDto);
  }

  @Query(() => [User])
  async getUsers() {
    return this.userService.getUsers();
  }
}
