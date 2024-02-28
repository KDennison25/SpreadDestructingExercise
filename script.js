const mcuShows = [ // 1a
    `Loki`,
    `Moon Knight`
]

const starWarsShows = [ // 1b
    `The Mandalorian`,
    `The Book of Boba Fett`
]

const disneyPlusShows = [...mcuShows, ...starWarsShows, `The Beatles: Get Back`] // 1c
console.log(disneyPlusShows); // 1d

const netflixMovies =  {
    action: `Extraction`,
    crime: `The Irishman`
} // 2a

const amazonPrimeMovies = {
    action: `The Tomorrow War`,
    drama: `One Night In Miami`
} // 2b

const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: `Hamilton`
} // 2c

console.log(streamingMovies); // 2d

const disneyJunior = [
    `Mickey Mouse Clubhouse`,
    `Spidey and His Amazing Friends`
] // 3a

const [mickey, spidey] = disneyJunior // 3b
console.log(mickey,spidey); // 3c

const avengers = {
    warMachine: `James Rhodes`,
    theHulk: `Bruce Banner` 
} // 4a

const {warMachine, theHulk} = avengers // 4b

console.log(warMachine,theHulk); // 4c

const moreAvengers = {
    blackWidow: `Natasha Romanoff`,
    hawkeye: `Clint Barton`,
    ironMan: `Tony Stark`
} // 4d

const {
    blackWidow:nat, ...others
} = moreAvengers // 4e

console.log(nat, others); // 4f

const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

const all = [
    ...bonus.first,
    ...bonus.second,
    ...bonus.third
]

console.log(all);

const [one, two, three] = bonus.first
const [four, five, six] = bonus.second
const [seven, eight, nine] = bonus.third
console.log(one, two, three, four, five, six,seven, eight, nine );