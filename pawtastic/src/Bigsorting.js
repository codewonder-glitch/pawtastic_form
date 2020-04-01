function bigSorting(unsorted) {
    var small;
    var arr=[];
    small=unsorted[0];
    var a=unsorted;
    for(let i=0;i<a.length;i++)
    {
        console.log("i values is",i);
        console.log("value of dec is",small);
        var comp=a[i++];
        if(small>=comp)
        {
         small=comp;  
        }
        i--;
        if (i===a.length-1)
        {
         console.log("i values is",i);
        arr.push(small);
        console.log("dec values is",small);
        let index=a.indexOf(small);
        a.splice(index,1);
        i=-1;
        small=a[0];
        }
    
    }
    console.log(arr);
    return arr;    
   
}
    unsorted=[35545454543,3,19,12,36,466757578858578999696];
    bigSorting(unsorted);
    