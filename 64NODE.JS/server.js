/**. npm init -y (The Birth of a Project)
Terminal mein apne folder (64NODE.JS) ke andar jaakar likho: npm init -y.

Isse ek package.json file banegi.

Ye file tumhare project ki "Aadhaar Card" hai. Isme likha hoga project ka naam, version, aur kaun-kaun si libraries tum use kar rahe ho.

2. Pehla Package Install Karo
Chalo ek chota sa package install karke dekhte hain:
npm install slugify

Dekho kaise node_modules naam ka ek bhari-bharkam folder ban jata hai.

package.json mein check karo, "dependencies" ke andar slugify likha hua aa jayega.

3. Server chala kar dekho
Jo server.js tumne banayi thi, usme ab tum backend ka logic likh sakte ho. */

console.log("hello") ;
const slugify = require('slugify')

let myTitle = "Jayesh Prajapati Sigma Backend Developer"
let urlSafeTitle = slugify(myTitle, '_') // Space ko underscore bana dega

console.log(urlSafeTitle) 
// Output: Jayesh_Prajapati_Sigma_Backend_Developer