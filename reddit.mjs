#! /usr/bin/env node

import fetch from 'node-fetch';
import open from 'open';
import yargs from "yargs";

const { argv } = yargs(process.argv);

const res = await fetch("https://www.reddit.com/.json");
const data = await res.json();
const children = data.data.children;
const randomPost = children[Math.floor(Math.random() * children.length)];
const link = `https://reddit.com${randomPost.data.permalink}`

console.log(`
Title: ${randomPost.data.title}\n
Link: ${link}
`);  
    
open(link);