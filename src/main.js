const LONG_MAX = 9007199254740991;
const LONG_MIN = -LONG_MAX - 1;

const tests = [
    {param1: 0, param2: 0, result: 0},
    {param1: 1, param2: 0, result: 1},
    {param1: 0, param2: 1, result: 1},

    {param1: LONG_MAX, param2: 0, result: LONG_MAX},
    {param1: 0, param2: LONG_MAX, result: LONG_MAX},
    {param1: LONG_MAX, param2: LONG_MAX, result: -2},

    {param1: LONG_MIN, param2: 0, result: LONG_MIN},
    {param1: 0, param2: LONG_MIN, result: LONG_MIN},
    {param1: LONG_MIN, param2: LONG_MIN, result: 0},

    {param1: LONG_MAX - 1, param2: 1, result: LONG_MAX},
    {param1: 1, param2: LONG_MAX - 1, result: LONG_MAX},

    {param1: LONG_MIN + 1, param2: -1, result: LONG_MIN},
    {param1: -1, param2: LONG_MIN + 1, result: LONG_MIN}
];

function addTwoNum(a, b) {
    return a + b;
}

for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = addTwoNum(test.param1, test.param2);
    if (result !== test.result) {
        console.error(`error_case input=[${test.param1} ${test.param2}]result=[${result}] expect=[${test.result}]\n`);
        process.exit(-1);
    }
}
