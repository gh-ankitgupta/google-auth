import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy'
import { GoogleOauthStrategy } from './auth/google/google-oauth.strategy';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService,GoogleOauthStrategy],
})
export class AppModule {}
