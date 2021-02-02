import Debug from 'debug';
import { TelegrafContext } from 'telegraf/typings/context';
import { getChatId, getOpponentChatId } from '../lib/common';
const debug = Debug('message:on_edited');

const onEditedMessage = () => async (ctx: TelegrafContext) => {
  debug('Triggered "on_edited" message.');

  const chatId = getChatId(ctx);
  const messageText = ctx.editedMessage?.text;
  if (!messageText) {
    debug('Edited message text not found.');
    return await ctx.reply('Edited message text not found.');
  }

  const editMessageText = `Edited to: ${messageText}`;
  const opponentChatId = await getOpponentChatId(chatId);
  return await ctx.tg.sendMessage(opponentChatId, editMessageText);
};

export { onEditedMessage };