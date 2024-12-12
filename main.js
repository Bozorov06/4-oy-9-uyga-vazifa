//   AT METHOD 
//  1.Massivning oxiridan berilgan indeksga nisbatan qiymatni topuvchi funksiyani yozing. (Masalan, -1 indeksdan ikkinchi elementni toping.)

// ==================================================
// function find(arr,index) {
//     return arr.at(index - arr.length)
// }
// let arr = [1,2,3,4,5];
// let index = 3;
// console.log(find(arr,index));




// 2.Berilgan massivdagi barcha juft indeksdagi elementlarni yangi massivga yig'uvchi funksiyani yarating.

// ==================================================
// function sum(arr) {
//     let res = [];
//     for (let i = 2; i < arr.length; i += 2) {
//         res.push(arr.at(i))
//     }
//     return res
// }
// let arr = [1,2,3,4,5,6]
// console.log(sum(arr));






// 3.Massivning ixtiyoriy indeksidagi qiymatni o'zgartirib, yangi massiv qaytaruvchi funksiyani yarating.

// ==================================================
// function s(arr,index) {
//     arr[index]= 'bye'
//     return arr;
// }
// let arr = [1,2,3,4,5,6,7]
// let index = 5
// let res = []
// console.log(s(arr,index));


// JOIN METODI

// 1.Massivning barcha elementlarini berilgan biriktiruvchi belgi bilan birlashtirib, umumiy uzunligini qaytaruvchi funksiyani yozing.
// let num = [1,2,3,4,5,6,7]
// let res = num.join (',')
// console.log(res);
// function sum(num) {
//     for (let i = 0; i < num.length; i++) {
//         res.push(num)
//     }
//     return res
// }

// console.log(num.length);



// 2.Berilgan massiv elementlarini teskari tartibda qo'shuvchi va belgi bilan birlashtiruvchi funksiyani yarating.

// ==================================================
// function s(arr) {
//    res.push(arr.reverse().join('-'))
//    return res
// }
// let arr =[1,2,3,4,5,6,7]
// let res = []
// console.log(s(arr));


// 3.Berilgan massivning faqat toq sonli elementlarini ajratib, ularni biriktiruvchi funksiyani yarating.

// ==================================================




// toString

// 1.Massiv elementlarini stringga aylantirib, har bir elementning uzunligini qaytaruvchi funksiyani yarating.

// ==================================================
// function s(arr) {
//     let res = []
//     for(let i= 0; i< arr.length; i++){
//         res.push(String(arr[i].length))
//     }
//     return res
// }
// let array =['12','salom','usmonali','hi','bye'];
// let result = s(array)
// console.log(result);



// 2.Massiv elementlarini string shaklida birlashtirib, belgilangan elementni qidiruvchi funksiyani yozing.

// ==================================================
// function s(arr) {
//     return arr.toString()
// }
// let arr =[1,2,3,4,5,6,7,8,9]
// console.log(s(arr));


// 3.Massivni stringga aylantirgandan so'ng, oxiridan boshlab bir elementni olib tashlaydigan funksiyani yarating.
// ==================================================
// function s(arr) {
//     arr.pop()
//     return arr.toString()
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(s(arr));


//  CONCAT

// 1.Ikki massivni birlashtirib, oxirgi elementni olib tashlaydigan funksiyani yozing.

// ==================================================

// let arr1 = [1,2,3,4,5,6];
// let arr2 =[7,8,9,]
// let res = arr1.concat(arr2)

// 2.Bir nechta massivlarni birlashtirib, faqat unikal qiymatlarni saqlaydigan funksiyani yarating.
// let arr1= [1,2,3];
// let arr2= [4,5,1];
// let arr3= [2,6,7,8];
// let res = arr1.concat(arr2,arr3);

// result = [];

// for(const iter of res){
//     if(!result.includes){
//         result.push(iter)
//     }
//     return result;
// }
// console.log(result);


// ==================================================

// 3.Bir nechta massivlarni birlashtirib, faqat musbat sonlarni o'z ichiga olgan yangi massiv qaytaruvchi funksiyani yozing.

// ==================================================

// function s(arr1,arr2,arr3) {
//     const res = arr1.concat(arr2,arr3)
//     const m = res.push((arr1, arr2, arr3)>0);
//     return m;
// }
// let arr1= [1,2,-3,3,4];
// let arr2 = [-7,6,-5];
// let arr3 = [9,-11,12-10,-8];
// let result = s(arr1, arr2, arr3);
// console.log(result);


// flat

// 1.Ichma-ich massivlardan iborat massivni tekis qilib, faqat toq sonlarni o'z ichiga oluvchi yangi massiv yaratuvchi funksiyani yozing.
// ==================================================
// function s(arr) {
//     return arr.flat().filter(Number=>Number%2!=0)
// }
// let arr = [[1,2,3],[4,5,6,7]]
// let res = s(arr);
// console.log(res);


// 2.3 darajadan chuqur bo'lgan massivni faqat 2 darajagacha tekislovchi funksiyani yarating.
//===================================================
// function s(arr) {
//     let res = arr.flat()
//     return res
// }
// let arr = [[1, 2],[3,4],[ 5, 6,[7,8,[9,10]]]];
// console.log(s(arr));



// 3.Ichma-ich massivlarning faqat elementlari yig'indisini qaytaruvchi funksiyani yozing.
// ==================================================
// function s(arr) {
//     let sum =0;
//     let res = arr.flat();
//     for(const itr of res){
//         sum += itr
//     }
// }
// let arr = [ [1, 2, 3], [4, 5, 6, 7],8,9,10];
// console.log(s(arr));


// SPLICE,TOSPLICED

// 1.Massivdan ixtiyoriy indeksdagi 3 ta elementni olib tashlaydigan va yangi massiv qaytaradigan funksiyani yozing.
// ==================================================



// 2.Massivning boshiga yangi elementlar qo'shib, asl massivni o'zgartiruvchi funksiyani yarating.
// ==================================================
// function s(arr,index) {
//     arr.splice(0,0,index);
//     return arr.flat()
// }
// let arr =[5,6,7,8,9]
// let index=[1,2,3,4]
// console.log(s(arr,index));

// 3.Massivning o'rtasidan elementlarni qo'shish yoki olib tashlash orqali yangi massiv yaratadigan funksiyani yozing.
// ==================================================
// function s(arr, index) {
//     let res= arr.splice(index)
    
//     return res
// }
// let arr = [1,2,3,4,5, 6, 7,];
// let index = 3
// console.log(s(arr, index));

// SLICE

// 1.Massivning faqat o'rtadagi elementlarini ajratib oluvchi funksiyani yozing.
// ==================================================
// function s(arr) {
//     let res= arr.slice(1,5)
//     return res
// }
// let arr = [1,2,3,4,5,6]
// console.log(s(arr));

// 2.Massivning oxirgi qismidan belgilangan uzunlikda yangi massiv qaytaruvchi funksiyani yarating.
// ==================================================
// chunmadim
// 3.Massivning faqat juft indekslaridagi elementlardan yangi massiv yaratadigan funksiyani yozing.
// ==================================================



// indexOf,lastindexOf

// 1.Massivda berilgan elementni qidirib, uning indekslari yig'indisini qaytaruvchi funksiyani yozing.
// ==================================================
// function s(arr) {
//     let res =arr.indexOf(3)+1
//     return res
// }
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(s(arr));

// 2.Massivdagi eng oxirgi va birinchi elementlarning indekslari orasidagi masofani topuvchi funksiyani yarating.
// ==================================================
// function s(arr) {
//     return arr.length-2
// }
// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(s(arr));

// 3.Massivdagi qidirilayotgan elementni birinchi va oxirgi ko'rinishini almashtirib qo'yadigan funksiyani yozing.
// ==================================================
// qanday qilishni chunmadim

// includes

//1. Massivning faqat musbat sonlardan iboratligini tekshiruvchi funksiyani yozing.
// ==================================================

//2. Massivda berilgan qiymat mavjudligini tekshirib, mavjud bo'lsa, massivga yana qo'shmaydigan funksiyani yarating.
//===================================================
// function s(arr) {
//     return arr.includes(7)
// }
// let arr =[1,2,3,4,5,6,7,8,9]
// console.log(s(arr));

// 3.Massivda ketma-ketligi bo'yicha elementlar mavjudligini tekshiruvchi funksiyani yarating.
// ==================================================
// function s(arr) {
//     return arr.includes(2,1,3,4,5,6,7,8)
// }
// let arr = [1,2,3,4,5,6,7,8]
// console.log(s(arr));

// sort

// 1.Berilgan massivni kamayish tartibida saralab, faqat oxirgi uch elementni qaytaruvchi funksiyani yozing.
// ==================================================
// function s(arr) {
//     arr.sort(function(a,b) {
//         return b-a
//     })
//     return arr.slice(-3)
// }
// let arr =[1,2,3,4,5,6,7,8]
// console.log(s(arr));


// 2.Sonlar massivini musbat va manfiy qiymatlarga ajratib, ularni alohida saralovchi funksiyani yarating.
// ==================================================
// function s(arr) {
    
// }

// 3.Massivning faqat birinchi uch elementini saralab, natijani qaytaruvchi funksiyani yozing.
// ==================================================
// function s(arr) {
//     let res = arr.slice(0,3).sort((a,b)=>a-b)
//     return res
// }
// let arr = [2,3,4,6,1,5]
// console.log(s(arr));


// reverse

// 1.Massivni teskari tartibda o'zgartirib, faqat oxirgi elementni birinchi o'ringa qo'ymaydigan funksiyani yozing.
// ==================================================
// function s(arr) {
//     arr.reverse();
//     arr.shift()
//     return arr
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(s(arr));


// 2.Massivni teskari aylantirib, o'rtadagi qiymatlarni olib tashlaydigan funksiyani yarating.
// ==================================================
// function s(arr) {
//     arr.reverse();
//     return arr
// }
// let arr = [1,2,3,4,5]
// console.log(s(arr));

// 3.Massivni ikki marta teskari aylantirgan holda yangi massiv qaytaruvchi funksiyani yozing.
// ==================================================


// for...of

// 1.for...of yordamida massivdagi barcha juft sonlarni yig'ib, ularning o'rtacha qiymatini qaytaruvchi funksiyani yozing.
// ==================================================
// function s(arr) {
//     let sum = 0;
//     let counter = 0
//     for(const itr of arr){
//         if(itr%2==0){
//             sum += itr
//             counter++
//         }
//     }
//     return sum/counter
// }
// let arr = [1,2,3,4,5,6,7,8]
// console.log(s(arr));


// 2.for...of yordamida massivning har bir elementiga berilgan qiymatni qo'shib, yangi massiv yaratadigan funksiyani yozing.
// ==================================================
// function s(arr,value) {
//     let res = []
//     for(const itr of arr){
//         res.push(itr + value);
//     }
//     return res;
// }
// let arr = [1,2,3,4,5,6,7,8]
// let value =4
// console.log(s(arr,value));


// 3.for...of yordamida massivdagi manfiy sonlarni ajratib, yangi massiv qaytaruvchi funksiyani yozing.
// ==================================================
// function s(arr) {
//     let res = []
//     for(const itr of arr){
//         if (itr<0) {
//             res.push(itr)
//         }
//     }
//     return res
// }
// let arr = [1,2,3,-4,-2,5,-7]
// console.log(s(arr));


// for...in

// bularni qanday qilishni bilmadim

// 1.for...in yordamida massivning indekslari yig'indisini hisoblovchi funksiyani yozing.
// ==================================================



// 2.for...in yordamida massiv elementlarining indekslari bo'yicha qiymatlarni almashtiruvchi funksiyani yozing.
// ==================================================

// 3.for...in yordamida massivda qaysi indekslar faqat musbat sonlarni o'z ichiga olishini aniqlaydigan funksiyani yozing.
// ==================================================


