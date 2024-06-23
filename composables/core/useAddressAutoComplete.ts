export const useAddressAutoComplete = () => {
  const searchResults = ref([]);
  const loadingLocations = ref(false);
  const showDropdown = ref(false);

  const handleAddressAutocomplete = (val: string) => {
    loadingLocations.value = true;
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${val}&format=json&apiKey=5be2a6d3ac7d4b9abf876fe91878aa5e`)
      .then(response => response.json())
      .then(result => {
        showDropdown.value = true;
        searchResults.value = result.results;
      })
      .catch(error => {
        useNuxtApp().$toast.error(error.message || 'Something went wrong', {
            autoClose: 5000,
            dangerouslyHTMLString: true,
          });
        console.error(error);
      })
      .finally(() => {
        loadingLocations.value = false;
      });
  };

  const handleInput = (val: string) => {
    clearTimeout(debounceTimeout.value);
    debounceTimeout.value = setTimeout(() => {
      handleAddressAutocomplete(val);
    }, 500);
  };

  const debounceTimeout = ref<NodeJS.Timeout | null>(null);

  return {
    searchResults,
    loadingLocations,
    showDropdown,
    handleInput,
  };
};
