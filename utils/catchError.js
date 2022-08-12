const catchError = async (next, callback) => {
  try {
    await callback();
  } catch (err) {
    next(err);
  }
};

module.exports = catchError;
