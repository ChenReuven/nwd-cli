import { Command } from "commander";
const program = new Command();
import figlet from "figlet";
import open from "open";
import chalk from 'chalk';

const log = console.log;

log(chalk.cyanBright(figlet.textSync("NWD - Cli")));
const nwdFbUrl = 'https://www.facebook.com/groups/145321082797079';
const nwdYTUrl = 'https://www.youtube.com/@negevDev';

program
  .name('nwd')
  .description('NWD - Negev Web Developer CLI')
  .version('0.0.1');

program
.command('facebook')
.description('NWD Facebook')
.alias("fa")
.action(() => {
  open(nwdFbUrl);
});

program
.command('youtube')
.description('NWD Youtube')
.alias("yt")
.action(() => {
  open(nwdYTUrl);
});

program
.command('founders')
.description('NWD Founders')
.action(() => {
  log(chalk.blue(figlet.textSync("Yanai Edri")));
  log(chalk.blue("https://www.linkedin.com/in/yanaiedri"));

  log("-----------------------");

  log(chalk.magenta(figlet.textSync("Yury Michurin")));
  log(chalk.magenta("https://www.linkedin.com/in/yurymichurin"));
});

program.command('social')
.description('Social')
.option('--fa', 'Display NWD facebook')
.option('--yt', 'Display NWD Youtube')
.action((options) => {
  // log("This is a security NWD CLI, Solve This CAPTCHA! 🦄 ");
  log(chalk.bgMagentaBright("opening in 3 2 1..."));

  setTimeout(() => {
    if(options?.fa) {
      open(nwdFbUrl);
    } else if(options?.yt) {
      open(nwdYTUrl);
    }
  }, 3000);
});


program.parse();

// Try the following:
//    node nwd
//    node nwd help
//    node nwd facebook/fa
//    node nwd youtube/yt