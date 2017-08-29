// 数组扩展

{
    console.log('此API将数据对象转换为数据类型');
    let arr = Array.of(3,4,5,6);
    console.log('arr=', arr);    // arr= [3,4,5,6]

    let empty = Array.of();
    console.log('empty=', empty);   // empty=[]
}

{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function (item) {
        console.log(item.innerText);
    });

    console.log(Array.from([1,2,4],function (item) {
        return item*2;
    }))
}

{
    console.log('fill-7', [1,'a',undefined].fill(7));  // fill-7 [7, 7, 7]
    console.log('fill,pos', ['a','b','c','d','e'].fill(7,1,3)); // fill,pos ["a", 7, 7, "d", "e"]
}

{
    for(let index of ['1','c','ks'].keys()){
        console.log('keys', index); // keys 0
                                    // keys 1
                                    // keys 2
    }
    for(let index of ['1','c','ks'].values()){
        console.log('values', index); // values 1
                                      // values c
                                      // values ks
    }
    for(let [index,value] of ['1','c','ks'].entries()){
        console.log('键值', index,value); // 键值 0 1
                                          // 键值 1 c
                                          // 键值 2 ks
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4)); //[4,2,3,4,5]
}

{
    console.log([1,2,3,4,5,6].find(function (item) {
        return item>3;                                    // 4
    }));
    console.log([1,2,3,4,5,6].findIndex(function (item) {
        return item>3;                                    // 3
    }))
}

{
    console.log('number', [1,2,NaN].includes(1));      // number true
    console.log('number', [1,2,NaN].includes(NaN));      // number true
}