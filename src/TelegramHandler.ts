import TelegramBot from 'node-telegram-bot-api';
import config from '../config';

export class TelegramHandler {
  constructor() {
    this.bot = new TelegramBot(config.BOT_TOKEN);
  }

  private bot: TelegramBot;

  public sendMessage(chatId: number, message: string) {
    return this.bot.sendMessage(chatId, message);
  }

  public sendPhoto(chatId: number, fileId: string) {
    return this.bot.sendPhoto(chatId, fileId)
  }

  public sendVideo(chatId: number, fileId: string) {
    return this.bot.sendVideo(chatId, fileId)
  }

  public sendDocument(chatId: number, fileId: string) {
    return this.bot.sendDocument(chatId, fileId)
  }

  public sendSticker(chatId: number, fileId: string) {
    return this.bot.sendSticker(chatId, fileId)
  }

  public sendLocation(chatId: number, latitude: number, longitude: number) {
    return this.bot.sendLocation(chatId, latitude, longitude)
  }

  public sendContact(chatId: number, phoneNumber: string, firstName: string, lastName?: string, vcard?: string) {
    return this.bot.sendContact(chatId, phoneNumber, firstName, { last_name: lastName, vcard });
  }
}