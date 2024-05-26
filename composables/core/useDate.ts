export function useDate() {
    const formatDate = (date: Date): string => {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return date.toLocaleDateString('en-US', options);
    };
  
    const getTodayDate = (): string => {
      const today = new Date();
      return formatDate(today);
    };
  
    return {
      getTodayDate,
    };
  }
  