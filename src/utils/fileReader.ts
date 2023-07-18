const fs = require('fs');

// this method takes file path as input and returns array of lines(string) as output
export async function readFileLines(filePath: string) {
  let lines: string[] = [];
  const fileContents: string = fs.readFileSync(filePath, 'utf-8');
  await fileContents.split(/\r?\n/).forEach((line: string) => {
    lines.push(line);
  });

  return lines;
}
