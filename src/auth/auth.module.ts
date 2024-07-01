import { Module } from '@nestjs/common';
// import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { GoogleOauthModule } from './google/google-oauth.module';
import { JwtAuthModule } from './jwt/jwt-auth.module';
import { AuthController } from './auth.controller';
// import { CognitoOauthModule } from './cognito/cognito-oauth.module';

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule,
    GoogleOauthModule,
    JwtAuthModule,
  ],
})
export class AuthModule {}