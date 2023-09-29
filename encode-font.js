const fs = require('fs');

fs.readFile('Arabic-Regular.ttf', (err, data) => {
    if (err) throw err;
    const base64Font = data.toString('base64');
    fs.writeFile('arabic-font.js', `var arabicFontBase64 = "${base64Font}";`, (err) => {
        if (err) throw err;
        console.log('Font has been encoded and saved to arabic-font.js');
    });
});