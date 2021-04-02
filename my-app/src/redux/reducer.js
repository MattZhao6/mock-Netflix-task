const initialState = {
    myList: [],
    recommendations: []
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "INIT_DATA":
        return {
          ...state,
          myList: action.getList.mylist,
          recommendations: action.getList.recommendations
        };
  
      case "REMOVE_MOVIE":
        let newList = state.myList.filter((movie) => movie.id !== action.data.id);
        let newRecom = [...state.recommendations, action.data];
  
        return {
          ...state,
          myList: newList,
          recommendations: newRecom
        };
  
      case "ADD_MOVIE":
        let newRecomm = state.recommendations.filter(
          (movie) => movie.id !== action.data.id
        );
        let newLis = [...state.myList, action.data];
  
        return {
          ...state,
          myList: newLis,
          recommendations: newRecomm
        };
  
      default:
        return state;
    }
  }
  
  export default reducer;
  