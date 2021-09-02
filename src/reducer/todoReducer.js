export const TYPES = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    TOGGLE: "TOGGLE"
}

export const todoReducer = (state = [], action) => {
      switch (action.type){
          case TYPES.ADD:
         return [...state,  action.payload]
         case TYPES.REMOVE:
             return state.filter(item => item.id !== action.payload)
         case TYPES.TOGGLE:
              return state.map(todo => 
               (todo.id === action.payload)
                ? { ...todo,done: !todo.done }
                : todo
              )
          default:
          return state;
      }
}


