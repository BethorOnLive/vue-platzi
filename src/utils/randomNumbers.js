export const getRandomNumbers = ({ maxNumber, minNumber }) => {
  
    const calcRandomNumber = () => Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;


  const numberToGuess = calcRandomNumber()
  let initialRandomNumber = calcRandomNumber()

  if (initialRandomNumber === numberToGuess) {
    initialRandomNumber = calcRandomNumber()
  }

  return {
    numberToGuess,
    initialRandomNumber,
  }
}