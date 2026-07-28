const fs = require('fs');

function updateSlugs(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/-mesa-mesa-az/g, '-mesa-az');
  fs.writeFileSync(file, content, 'utf8');
}

updateSlugs('src/data/services.ts');
if (fs.existsSync('src/data/services-extra.ts')) {
  updateSlugs('src/data/services-extra.ts');
}
console.log('Done replacing mesa-mesa with mesa');
