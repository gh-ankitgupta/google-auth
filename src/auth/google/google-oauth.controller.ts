import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { GoogleOauthGuard } from './google-oauth.guard';
import { JwtAuthService } from '../jwt/jwt-auth.service';
import { config } from 'dotenv';
config();


@Controller('google')
export class GoogleOauthController {
  constructor(private jwtAuthService: JwtAuthService) {}

  @Get()
  @UseGuards(GoogleOauthGuard)
  async googleAuth(@Req() _req) {
    // Guard redirects
  }

  @Get('redirect')
  @UseGuards(GoogleOauthGuard)
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const { accessToken } = this.jwtAuthService.login(req.user);
    console.log(accessToken);
    res.cookie('user_token', accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000
    });
    return res.redirect('/private');
  }

}