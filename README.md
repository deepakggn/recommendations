# recommendations
NodeJS app to show recommendations based on user content.

How to run the app in VS Code:
1) Extract the files
2) npm install
3) node rec.js

You can find recommendations by using something like "Ottawa" or "software developer" or "doctors in Toronto" in line 11(rec.js)

The higher the score, the more similar the item is Documents with score < 0.1 are filtered because options minScore is set to 0.1
