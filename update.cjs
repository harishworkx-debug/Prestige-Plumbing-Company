const fs = require('fs');

function updateSlugs(file) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Update slug: 'xxx'
  content = content.replace(/slug:\s*['"]([^'"]+)['"]/g, (match, p1) => {
    if (p1.endsWith('-mesa-mesa-az')) return match;
    return `slug: "${p1}-mesa-mesa-az"`;
  });
  
  // Update related: ['xxx', 'yyy']
  content = content.replace(/related:\s*\[([^\]]+)\]/g, (match, p1) => {
    const updated = p1.replace(/['"]([^'"]+)['"]/g, (m, p2) => {
      if (p2.endsWith('-mesa-mesa-az')) return m;
      return `"${p2}-mesa-mesa-az"`;
    });
    return `related: [${updated}]`;
  });
  
  fs.writeFileSync(file, content, 'utf8');
}

updateSlugs('src/data/services.ts');
if (fs.existsSync('src/data/services-extra.ts')) {
  updateSlugs('src/data/services-extra.ts');
}
console.log('Done');
