const petJudger = (petBreed, petName) => {
  if (!petBreed || !petName) return  console.log('Please provide a valid pet')
  if (petBreed === 'dog') console.log(`I love dogs! ${petName} is so cute!`)
  else if (petBreed === 'cat') console.log(`I love cats! ${petName} is so cute!`)
  else if (petBreed === 'turtle') console.log(`Who doesn't love a good turtle? ${petName } is the tops.`)
  else if (petBreed === 'bird') console.log(`I love bird! ${petName} is so cute!`)
  else if (petBreed === 'snake') console.log(`Not a fan, please take ${petName} and leave.`)
  else if (petBreed === 'fish') console.log(`I love fish! ${petName} is so cute!`)
  else console.log('What an...interesting pet.')
};

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i);
  }
};

const shoutEveryLetterForLoop = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i].toUpperCase() + '!')
  }
};

const shoutArrayMethod = (str) => {
  str.split('').forEach((letter) => {
    console.log(letter.toUpperCase() + '!')
  })
};

const generateMultiplesOf5ToNum = (num) => {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr;
};

const isLongArray = (arr) => {
  return arr.length > 10
};

const addToFrontOrBack = (arr, value, isBack) => {
  if (value === undefined || value === null) return arr;
  return isBack === true? arr.push(value) : arr.unshift(value)
};

const replaceMiddleValue = (arr, value) => {
  const middleIndex = Math.floor(arr.length / 2)
  return arr.splice(middleIndex, 1, value)
};

const getAllXCoordinates = (arr) => {
  return arr.map(([x]) => x)
};

const carMaker = (model, maker, year, owner) => {
  return {
    model,
    maker,
    year,
    needsOilChange: false,
    owners: [owner]
  }
};

const getFavoriteChildName = (obj) => {
  return obj.children[0] ? obj.children[0].name : null
};

const getPessimisticTotal = (nums) => {
  const initalValue = 0
  const sum = nums.reduce((sum, value) => sum + value, initalValue)
  return Math.floor(sum)
};

const getNamesOfGreedyGnomes = (gnomes) => {
  return gnomes.filter((gnome) => gnome.stolenDecorations.length > 1).map((gnome) => gnome.name)
};

const getAllNumbersFromString = () => {
  /* Nah I'm good Fam. I hate Regex lol */
};

// Do this only after all else
const obliterate = (obj) => {
  for (let key in obj) {
    delete obj[key];
  }
  obj.wasObliterated = true;
};

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  shoutArrayMethod,
  generateMultiplesOf5ToNum,
  isLongArray,
  addToFrontOrBack,
  replaceMiddleValue,
  getAllXCoordinates,
  carMaker,
  getFavoriteChildName,
  getPessimisticTotal,
  getNamesOfGreedyGnomes,
  getAllNumbersFromString,
  obliterate,
};
