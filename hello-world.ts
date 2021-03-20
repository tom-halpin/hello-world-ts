import { Answers, prompt, InputStreamOption, Question, Questions } from 'inquirer';
import chalk from 'chalk';

//define class with constructor
const questions: Question[] = [
    {
      type: 'input',
      name: 'name',
      message: chalk.green('Enter your name [required]'),
      validate: (value: any) => {
        if (!value) {
          return chalk.red('Please enter your name');
        } else if (!/^[a-zA-Z\s]*$/.test(value)) {
          return chalk.red('Name must be contain only letters and spaces.');
        }
        return true;
      },
    },
    {
      type: 'list',
      name: 'message',
      message: chalk.green('Select message to display [required]'),
      choices: ['Hello', 'Hi', "Howdy", "Good day", "Dia dhuit"],
    },
    {
      type: 'rawlist',
      name: 'question',
      message: chalk.green('Select question to ask by way of reply [required]'),
      choices: ['How you doing?', 'How are things?', "Wazzup?"],
    },
  ];

class HelloWorld {
    private prompt: Promise<Answers> | undefined = undefined;
    constructor() {
        console.log('world building');
    }

    public run() {
        console.log('Firing up the flux capacitor');
        this.prompt = prompt(questions);
        this.prompt.then((answers: Answers) => {
            console.log('-------------------------------');
            console.log(chalk.blueBright(answers.message), chalk.blueBright(answers.name), chalk.blueBright(answers.question));
        });

    }
}

const helloWorld = new HelloWorld();

helloWorld.run();