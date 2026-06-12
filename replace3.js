const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else { 
            /* Is a file */
            if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.json')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replacements
    content = content.replace(/Studio Fix by Tanvi Singh/g, "Glanz Studio Unisex Salon");
    content = content.replace(/STUDIO FIX SALON/g, "GLANZ STUDIO SALON");
    content = content.replace(/STUDIO FIX UNISEX SALON/g, "GLANZ STUDIO UNISEX SALON");
    content = content.replace(/STUDIO FIX/g, "GLANZ STUDIO");
    content = content.replace(/Studio Fix/g, "Glanz Studio");
    content = content.replace(/studiofixdelhi/g, "glanzstudio");
    content = content.replace(/by Tanvi Singh/g, "");

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
