const apiResponse = {
  toggleMode: true,
  ticTacToe: true,
  qrGenerator: true,
  tabContainer: true,
};

function featureFlagsService() {
  return new Promise((resolve, reject) => {
    if (apiResponse)
      setTimeout(() => {
        resolve(apiResponse);
      }, 500);
    else reject("Some error occured");
  });
}

export default featureFlagsService;
