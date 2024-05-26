export function useCurrency() {
    const formatToNaira = (amount: number): string => {
      return `₦${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
    };
  
    return {
      formatToNaira
    };
  }