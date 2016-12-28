module.exports = class {
  constructor(ver) {
    this.version = ver || 'No Version Specified';
    this.options = {
      help: 'Prints All Options',
      version: 'Prints The Current Version'
    };
  }
  
  option(flags,desc) {
    flags = flags.replace('-', '');
    return (this.options[flags] = desc) && this;
  }
  
  help() {
    process.stdout.write('\nOptions:');
    let i = (a,b) => {
      return `\n<- -${a}\n` + `-> ${b}`;
    } 
    for(let k in this.options) {
      process.stdout.write('\n' + i(k,this.options[k]));
    }
    return process.stdout.write('\n\n') && this;
  }
  
  send(y) {
    y = y.slice(2);
    if(y.includes('-help') || y.includes('-h')) this.help();
    if(y.includes('-version')) process.stdout.write(this.version + '\n');
    y.filter( (arg) => {
        arg = arg.replace('-', '');
        if(this.options[arg]) this[arg] = true;
   });
    return this;
  }
}
