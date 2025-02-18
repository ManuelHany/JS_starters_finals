// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const Data_1 = [17, 21, 23];
const Data_2 = [12, 5, -5, 0, 4];

const printForcast = function (dataArr) {
  let mainStr = '';
  for (let i = 0; i < dataArr.length; i++) {
    mainStr += `${String(dataArr[i])}ºC in ${String(i + 1)} days ... `;
  }
  console.log('... ' + mainStr);
};

printForcast(Data_1);
