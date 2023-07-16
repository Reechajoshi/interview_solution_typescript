const fs = require('fs');

export const pack = async (filePath: string) => {
    return fs.readFileSync(filePath, 'utf-8');
};