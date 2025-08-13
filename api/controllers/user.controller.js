const user = (req, res, next) => {
  res.json({
    message: "User routes",
    timestamp: new Date().toISOString()
  });
};

export { user };