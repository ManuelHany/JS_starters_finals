const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
// const scoreDolphins = calcAverage(44,23, 71);
const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(65, 54, 49);
const scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

function checkWinner(scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= (2 * scoreKoalas)) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    } else if (scoreKoalas >= (2 * scoreDolphins)) {
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    } else {
        console.log("No team wins...")
    }
}
