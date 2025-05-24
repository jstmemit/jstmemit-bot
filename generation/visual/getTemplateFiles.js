import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

export const getTemplateFiles = (filename) => {
    const templatesDir = path.join(__dirname, 'generation', 'visual', 'assets', 'images');
    const templateFiles = fs.readdirSync(templatesDir).filter(file => file.endsWith('.png') || file.endsWith('.jpg'));

    if (filename) {
        return templateFiles.includes(filename) ? path.join(templatesDir, filename) : null;
    }

    return templateFiles.map(file => path.join(templatesDir, file));
}