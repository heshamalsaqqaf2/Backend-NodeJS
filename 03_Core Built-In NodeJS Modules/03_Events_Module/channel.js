const EventEmitter = require("node:events");

class Channel extends EventEmitter {
    constructor() {
        super();
        this.subscribers = 0;
    }
    subscribe() {
        this.subscribers++;
        this.emit("Subscribe");
    }
    displayNumberOfSubscribers() {
        console.log(`You have ${this.subscribers} subscribers!`);
    }
}

module.exports = Channel;