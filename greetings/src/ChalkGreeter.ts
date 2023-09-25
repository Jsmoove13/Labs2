import { Greeter } from "./Greeter";
import chalk from "chalk";

class ChalkGreeter extends Greeter {
    // this is the property
    formatting: (text: string) => string;
    constructor(greeting: string, formatting: (text: string) => string) {
        super(greeting);
        this.formatting = formatting;
    }
    greet(name: string): string {
        const message = super.greet(name);
        return this.formatting(message);
    }
};
// creating an instence of 'ChalkGreeter' below (w/ chalk.magenta)
// standard chalk colors: black, red, green, yellow, blue, magenta, cyan, white, grey
const chalkGreeter = new ChalkGreeter("Greetings", chalk.magenta);

export { ChalkGreeter, chalkGreeter };

// questions
// is chalk used for terminal text styling? What are the uses of chalk?
// what are some practices and tips for using it? It seems like it is just used for styling purposes since I have to make a class 