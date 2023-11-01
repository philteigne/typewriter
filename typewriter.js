const sentence = "hello there from lighthouse labs";

let delay = 0;

for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char);
  }, delay * 50);

  delay ++;
  if (delay === sentence.length - 1) {
    setTimeout(() => {
      console.log();
    }, delay * 51);
  }
}
