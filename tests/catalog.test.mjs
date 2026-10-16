import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const content=fs.readFileSync(new URL('../src/data/games.ts',import.meta.url),'utf8');
test('all 15 selected applications are represented',()=>{for(const slug of ['passthephone','mostlikely','blindrank','imposter-x','headstogether','would-you-rather','vibify','hammerxi','imposter-live','sussy-baka','wildguess','deluluverse','auralis','trust-issues','tether-zero'])assert.ok(content.includes(`slug:'${slug}'`),slug)});
test('each game has an outbound HTTPS URL and repository reference',()=>{const urls=[...content.matchAll(/url:'(https?:[^']+)'/g)];assert.equal(urls.length,15);urls.forEach(x=>assert.ok(x[1].startsWith('https://')));assert.equal([...content.matchAll(/repo:'/g)].length,15)});
test('solo and optional games are labeled',()=>{assert.ok(content.includes("optional:true"));assert.ok(content.includes("mode:'Solo'"))});

test('BlindRank is accurately listed as available solo play, with party rooms pending',()=>{assert.match(content,/slug:'blindrank'.*?mode:'Solo'.*?url:'https:\/\/blindrank-lemon\.vercel\.app'/s);assert.match(content,/Quick Play and Custom Rank are available now; live party rooms are coming soon/)});
