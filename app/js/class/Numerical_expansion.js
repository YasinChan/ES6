// 数值扩展

{
    console.log('二进制',0b111110111); // 二进制 503
    console.log('八进制',0o767); // 八进制 503
}

{
    console.log('15',Number.isFinite(15)); // 15 true
    console.log('NaN', Number.isFinite(NaN)); // NaN false
    console.log('1/0', Number.isFinite('true'/0)); // 1/0 false
    console.log('NaN', Number.isNaN(NaN)); // NaN true
    console.log('0', Number.isNaN(0)); // 0 false
}

{
    console.log('此API包括：判断是否为整数')

    console.log('25', Number.isInteger(25)); // 25 true
    console.log('25.0', Number.isInteger(25.0)); // 25.0 true
    console.log('25.1', Number.isInteger(25.1)); // 25.1 false
    console.log('25.1', Number.isInteger('25.1')); // 25.1 false
    console.log('25', Number.isInteger('25')); // 25 false        注： 必须为number
}

{
    console.log(Number.MAX_SAFE_INTEGER); //9007199254740991      注： 这是2的53次方，是最大数值
    console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991     注： 这是-2的53次方，是最小数值
    console.log('10', Number.isSafeInteger(10)); //10 true        注： 判断数字是否是安全范围内
}

{
    console.log('4.1', Math.trunc(4.1)); //4.1 4                  注： 取数字整数部分
}

{
    console.log('-5', Math.sign(-5)); // -5 -1                     注： 返回正数或负数 返回正数时为 1 返回负数时为 -1
    console.log('5', Math.sign(5)); // 5 1
    console.log('foo', Math.sign('foo')); // foo NaN
}

{
    console.log('-1', Math.cbrt(-1)); // -1 -1                        注： 返回 立方根
    console.log('8', Math.cbrt(8)); // 8 2
}