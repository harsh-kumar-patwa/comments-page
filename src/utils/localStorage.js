export const loadState = () => {
    try {
      const savedState = localStorage.getItem('commentsState');
      if (savedState === null) {
        return undefined;
      }
      return JSON.parse(savedState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const savedState = JSON.stringify(state);
      localStorage.setItem('commentsState', savedState);
    } catch {
      // Ignore write errors
    }
  };