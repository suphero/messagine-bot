import TelegramBot from 'node-telegram-bot-api';
import { MessageForwarderBase } from './MessageForwarderBase';
import { DataHandler } from '../DataHandler';
import { TelegramHandler } from '../TelegramHandler';

export class LocationForwarder extends MessageForwarderBase {
  constructor(dataHandler: DataHandler, telegramHandler: TelegramHandler, chatId: number, msgLocation: TelegramBot.Location) {
    super(dataHandler, telegramHandler, chatId);
    this.msgLocation = msgLocation;
  }

  private msgLocation: TelegramBot.Location;

  async _forward(opponentChatId: number) {
    await this.telegramHandler.sendLocation(opponentChatId, this.msgLocation.latitude, this.msgLocation.longitude);
  }
}
