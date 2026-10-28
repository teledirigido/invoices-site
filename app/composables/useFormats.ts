export const useFormats = () => {
  const { locale } = useI18n();

  type DateToken = 'd' | 'dd' | 'm' | 'mm' | 'Y' | 'y';
  type DateSeparator = '/' | '-' | '.';
  type DateFormat = `${DateToken}${DateSeparator}${DateToken}${DateSeparator}${DateToken}`;

  const formatDate = (date: string, format?: DateFormat) => {
    const d = new Date(date);
    if (!format) {
      return d.toLocaleDateString(locale.value, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    }
    const tokens: Record<string, string> = {
      d: String(d.getDate()),
      dd: String(d.getDate()).padStart(2, '0'),
      m: String(d.getMonth() + 1),
      mm: String(d.getMonth() + 1).padStart(2, '0'),
      Y: String(d.getFullYear()),
      y: String(d.getFullYear()).slice(-2),
    };
    return format.replace(/dd|d|mm|m|Y|y/g, (tok) => tokens[tok] ?? tok);
  };

  const formatDateTime = (date: string) => {
    const d = new Date(date);
    return d.toLocaleString(locale.value, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);

  return { formatDate, formatDateTime, formatCurrency };
};
