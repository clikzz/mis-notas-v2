import figlet from 'figlet';

export function printTitle(text: string) {
  return figlet.textSync(text);
}
