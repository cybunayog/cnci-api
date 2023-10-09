import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailService, MailDataRequired } from '@sendgrid/mail';

@Injectable()
export class SendgridService {
  private readonly logger = new Logger(SendgridService.name);

  constructor(
    private readonly configService: ConfigService, // Not working for some reason
    private readonly mailService: MailService,
  ) {
    this.mailService.setApiKey(
      process.env.SEND_GRID_KEY ? process.env.SEND_GRID_KEY : '',
    );
  }

  async send(mail: MailDataRequired) {
    try {
      const clientResponse = await this.mailService.send(mail);
      this.logger.log(`Email sent to ${mail.to}`);
      return clientResponse;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
