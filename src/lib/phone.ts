/**
 * Utilitário de formatação de telefone
 * Aplica máscara brasileira (XX) XXXXX-XXXX automaticamente se começar com dígitos locais,
 * ou mantém o formato internacional caso inicie com '+'
 */
export function formatPhoneNumber(value: string): string {
  if (!value) return '';

  // Se o usuário digitou '+' no início, respeita formato internacional
  if (value.startsWith('+')) {
    return '+' + value.replace(/[^\d]/g, '');
  }

  // Remove caracteres não numéricos
  const numbers = value.replace(/\D/g, '');

  if (numbers.length <= 2) {
    return numbers.length > 0 ? `(${numbers}` : '';
  }
  if (numbers.length <= 6) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }
  if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  }
  // 11 dígitos (celular com 9)
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
}
