export function cn(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(' ');
}
