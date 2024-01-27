import { Command } from "commander";
const program = new Command();
import figlet from "figlet";
import open from "open";


console.log(figlet.textSync("NWD - Cli"));
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
  console.log(figlet.textSync("Yanai Edri"));
  console.log("https://www.linkedin.com/in/yanaiedri");

  console.log("-----------------------");

  console.log(figlet.textSync("Yury Michurin"));
  console.log("https://www.linkedin.com/in/yurymichurin");
});

program.command('social')
.description('Social')
.option('--fa', 'Display NWD facebook')
.option('--yt', 'Display NWD Youtube')
.action((options) => {
  // console.log("This is a security NWD CLI, Solve This CAPTCHA! 🦄 ");
  console.log("open in 3 2 1...");
  console.log('Click on this link: https://www.example.com');

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