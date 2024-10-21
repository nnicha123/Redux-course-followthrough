const logger = (store) => (next) => (action) => {
  console.log("Store", store);
  console.log("next", next);
  console.log("action", action);
  next(action);
};

export default logger;
