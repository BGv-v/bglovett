const fs = require('fs');
const path = require('path');

const imageDir = './bglovett/images';
const images = fs.readdirSync(imageDir).filter(file => file.endsWith('.png'));

const output = {
    images: images.map(img => `images/${img}`),
    lastUpdated: new Date().toISOString()
};

fs.writeFileSync('image-list.json', JSON.stringify(output, null, 2));
console.log('图片列表已更新');
