import { join } from "path";

export const joinPath = (...paths: string[]) =>
  join(...paths).replace('https:/', 'https://')
