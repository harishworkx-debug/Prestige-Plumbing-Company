const fs=require('fs');
const p='d:/React Project/prestige-plumbing-leads/src/data/services.ts';
let c=fs.readFileSync(p,'utf8');
const s=['emergency-plumbing','water-heaters','drain-and-sewer','leak-detection','repiping','gas-line','bathroom-plumbing','kitchen-plumbing','residential-plumbing','commercial-plumbing'];
s.forEach(slug=>{
  c=c.split('"' + slug + '"').join('"' + slug + '-mesa-az"');
});
fs.writeFileSync(p,c);
console.log('done');
