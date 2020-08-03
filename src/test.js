
let test = {
    foo() {
        console.log('hello');
    },
    noname: {
        lal: {
            value: 228
        }
    }
}

const test2 = {...test};
const test3 = Object.assign({}, test);

test.foo = () => {
    console.log('hello 2');
}

test.noname.lal.value = 500;

console.log(test.foo());
console.log(test2.noname.lal.value);
console.log(test3.foo());
