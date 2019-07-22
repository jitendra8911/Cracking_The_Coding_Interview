const str = 'erbottlewat';
const str1 = 'waterbottle';
const regex = RegExp(str1);
const concatStr = str + str;
console.log(str.length === str1.length && regex.test(concatStr));

