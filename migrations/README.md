The need for package.json here is because sequelize-cli does
not support migrations in ESM.
Since the rest of the project uses ESM, this specific folder has to
either have all files to be renamed to .cjs or (the choice made here) have
package.json with `"type": "commonjs"` for Node to understand that the
entire folder is in commonjs.
See issue and comment:
https://github.com/sequelize/cli/issues/1156#issuecomment-1327246723
