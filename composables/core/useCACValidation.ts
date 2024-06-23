export const useCACValidation = () => {
  const cacRegistrationNumber = ref('');
  const isCACValid = ref(true);
  const showDropdown = ref(false);

  const validateCAC = () => {
    const cacPattern = /^\d{10}$/;
    isCACValid.value = cacPattern.test(cacRegistrationNumber.value);
    showDropdown.value = !isCACValid.value;
  };

  const cacInputClass = computed(() => {
    if (!cacRegistrationNumber.value) return 'border-gray-100';
    return isCACValid.value ? 'border-green-500' : 'border-red-500';
  });

  return {
    cacRegistrationNumber,
    isCACValid,
    showDropdown,
    validateCAC,
    cacInputClass,
  };
};
