export const doOnIcoming = (incomingData, funcToSetOutgoingData) => {
  funcToSetOutgoingData.end("Welcome to Twitter");
};

export const doOnError = (infoOnError) => {
  console.error(infoOnError);
};

// module.exports = { doOnIcoming, doOnError };
