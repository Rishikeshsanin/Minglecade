import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const content=fs.readFileSync(new URL('../src/data/games.ts',import.meta.url),'utf8');
test('all 16 selected applications are represented',()=>{for(const slug of ['passthephone','mostlikely','blindrank','never-have-i-ever','imposter-x','headstogether','would-you-rather','vibify','hammerxi','imposter-live','sussy-baka','wildguess','deluluverse','auralis','trust-issues','tether-zero'])assert.ok(content.includes(`slug:'${slug}'`),slug)});
test('each game has an outbound HTTPS URL and repository reference',()=>{const urls=[...content.matchAll(/url:'(https?:[^']+)'/g)];assert.equal(urls.length,16);urls.forEach(x=>assert.ok(x[1].startsWith('https://')));assert.equal([...content.matchAll(/repo:'/g)].length,16)});
test('solo and optional games are labeled',()=>{assert.ok(content.includes("optional:true"));assert.ok(content.includes("mode:'Solo'"))});

test('BlindRank lists live multiplayer and solo play without a coming-soon claim',()=>{assert.match(content,/slug:'blindrank'.*?mode:'Multiplayer'.*?url:'https:\/\/blindrank-lemon\.vercel\.app'/s);assert.match(content,/Play solo, compete in Classic Party rooms, or try Guess My Ranking/)});

test('Never Have I Ever has a verified HTTPS destination and its mature levels are clearly labeled',()=>{assert.match(content,/slug:'never-have-i-ever'.*?category:'Party & friends'.*?url:'https:\/\/never-have-i-ever-game\.vercel\.app'/s);assert.match(content,/Mature prompts require consenting adults \(18\+\)/)});
