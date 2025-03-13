function greet(name) {
    const now = new Date();
    const currentHour = now.getHours();
    if (currentHour >= 0 && currentHour < 12) {
        console.log(`Good Morning, ${name}!`);
    } else if (currentHour >= 12 && currentHour < 18) {
        console.log(`Good Afternoon, ${name}!`);
    } else console.log(`Good Evening, ${name}!`);
}

// TODO: =============== CommonJS Methods ===============
// module.exports = { greet };
// module.exports = greet;

// TODO: =============== ES Exports Methods ===============
export { greet };

// TODO: =============== Module Local Parameters ===============
// exports.name = "Hesham";
// console.log(module.exports.name);