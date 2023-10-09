import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendgridService } from './sendgrid/sendgrid.service';
import { MailService } from '@sendgrid/mail';
import { MailController } from './mail/mail.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, MailController],
  providers: [AppService, SendgridService, MailService],
})
export class AppModule {}
