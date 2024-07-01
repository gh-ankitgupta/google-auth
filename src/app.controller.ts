import { Controller, Get, Req,Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Get('private')
  getPrivate(@Req() req) {
    return {msg: "You are logged in"}
    // return req.user;
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) res) {
    res.cookie('user_token', '', { expires: new Date(Date.now()) });
    return {msg: "You are logged out!"};
  }

}


// @Controller('google')
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   @UseGuards(AuthGuard('google'))
//   async googleAuth(@Req() req) {}

//   @Get("hello")
//   getHello(): string {
//     return this.appService.getHello();
//   }

//   @Get('redirect')
//   @UseGuards(AuthGuard('google'))
//   googleAuthRedirect(@Req() req) {
//     return "heelo";
//     // return this.appService.googleLogin(req)
//   }
// }