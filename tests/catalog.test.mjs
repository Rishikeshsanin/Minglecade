import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const content=fs.readFileSync(new URL('../src/data/games.ts',import.meta.url),'utf8');
test('all 14 selected applications are represented',()=>{for(const slug of ['passthephone','mostlikely','imposter-x','headstogether','would-you-rather','vibify','hammerxi','imposter-live','sussy-baka','wildguess','deluluverse','auralis','trust-issues','tether-zero'])assert.ok(content.includes(`slug:'${slug}'`),slug)});
test('each game has an outbound HTTPS URL and repository reference',()=>{const urls=[...content.matchAll(/url:'(https?:[^']+)'/g)];assert.equal(urls.length,14);urls.forEach(x=>assert.ok(x[1].startsWith('https://')));assert.equal([...content.matchAll(/repo:'/g)].length,14)});
test('solo and optional games are labeled',()=>{assert.ok(content.includes("optional:true"));assert.ok(content.includes("mode:'Solo'"))});
