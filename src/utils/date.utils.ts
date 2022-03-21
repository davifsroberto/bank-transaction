export function dateFormateUtils(datetime: string): string {
  return new Date(datetime).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
  });
}
