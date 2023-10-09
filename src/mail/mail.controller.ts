import { Controller, Post, Body } from '@nestjs/common';
import { SendgridService } from 'src/sendgrid/sendgrid.service';
import { SendEmailDto } from './dto/send-email.dto';

import * as SendGrid from '@sendgrid/mail';

@Controller('mail')
export class MailController {
  constructor(private readonly sendGridService: SendgridService) {}

  @Post('send')
  async sendEmail(@Body() { subject, from, html }: SendEmailDto) {
    const mail: SendGrid.MailDataRequired = {
      to: 'cybunayog@gmail.com',
      subject,
      from,
      text: 'Inquiry',
      html,
    };

    return await this.sendGridService.send(mail);
  }
}
