/*     DATA TYPE 
    1. Value Type    --> NUMBER, STRING, BOOLEAN
    2.Reference Type --> ARRAY, CLASS              */

//Array Data Type

let arrayObj =[1,2,3,4,5];//case 1

//for loop
for(let counter=0;counter<=arrayObj.length-1;counter++)
//arrayObj length is 5 but array position start from zero so -1 from arrayObj length. 
{
    console.log(arrayObj[counter]); //1 2 3 4 5
}

//for each loop
for(let intValue of arrayObj)  //of : to get the elements of array
{
    console.log(intValue);//1 2 3 4 5
}

for(let intValue in arrayObj)  //in : to get the position of each element in array
{
    console.log(intValue);//0 1 2 3 4
}

let arrayObj1=[];//case 2
arrayObj1[0]=1;
arrayObj1[1]=2;

arrayObj1[4]=5;


//for loop
for(let counter=0;counter<=arrayObj1.length-1;counter++)
{
    console.log(arrayObj1[counter]); //1 2 (2)undefined 5
}

//for each loop
for(let intValue of arrayObj1)  //of : to get the elements of array
{
    console.log(intValue);//1 2 (2)undefined 5
}

for(let intValue in arrayObj1)  //in : to get the position of each element in array
{
    console.log(intValue);//0 1 4
}
