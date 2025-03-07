const useStore = create((set) => ({
    data: null,
    fetchData: async () => {
      const response = await fetch("https://api.example.com");
      const data = await response.json();
      set({ data });
    },
  }));
  const fetchData = () => {
    return {
      type: "FETCH_DATA", // Just a normal action
    };
  };
  const fetchData = () => {
    return async (dispatch) => {
      dispatch({ type: "FETCH_START" }); // Step 1: Show loading state
  
      try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
  
        dispatch({ type: "FETCH_SUCCESS", payload: data }); // Step 2: Save data in store
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message }); // Step 3: Handle error
      }
    };
  };