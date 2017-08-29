

{
    console.log('此API包括：判断字符串中是否包含、是否以某开始、是否以某结束');

    let str = 'string';
    console.log('includes', str.includes('c')); // includes true
    console.log('start', str.startsWith('str')); // start true
    console.log('end', str.endsWith('ng')); // end true
}

{
    console.log('此API包括：重复字符串');

    let str = 'abc';
    console.log(str.repeat(2)); // abcabc
}

{
    console.log('此API包括：拼接模板字符串');

    let name = 'list';
    let info = 'hello world';
    let m = `i am ${name}, ${info}`;
    console.log(m); // i am list, hello world
}

{
    console.log('此API包括：字符串补白，可以用作如：日期补白');

    console.log('1'.padStart(2,'0')); // 01
    console.log('1'.padEnd(2,'0')); // 10
}

{
    console.log('此API包括：标签模板，可用作多语言转换等');

    let user = {
        name: 'list',
        info: 'hello world'
    };
    console.log(abc`i am ${user.name}, ${user.info}`); //
    function abc(s,v1,v2) {
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}

{
    console.log('此API包括：对字符串的转义');

    console.log(String.raw`Hi\n${1+2}`); //Hi\n3
    console.log(`Hi\n${1+2}`); // Hi
                               // 3
}