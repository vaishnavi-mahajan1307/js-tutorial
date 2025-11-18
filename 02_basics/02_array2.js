const marvel_heros = ["thor" ,"iron_man","sapiderman"]
const dc_heros = ["superman","batman","flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros.length);
console.log(marvel_heros[3][0]);

const allarrays = marvel_heros.concat(dc_heros , 'hulk')
console.log(`allarrays` , allarrays);


const allarrays2 = [...marvel_heros, ...dc_heros , 'hulk']
console.log(allarrays2);

const another_array = [1,2,3,4,5,6,7,8,9 ,[10,11,12],13,14,["A","B","C"]]
console.log(another_array);
const real_another_array = another_array.flat(Infinity)