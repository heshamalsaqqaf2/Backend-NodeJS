const Channel = require('./channel');

const channel = new Channel();

// We treat the channel object like an instance of the EventEmitter class
// because Channel extends EventEmitter, inheriting its functionalities
channel.on("Subscribe", () => {
    console.log("Subscribed!");
});

channel.subscribe();
channel.displayNumberOfSubscribers();
