## ngCopenhagen
### Angular Workshop for Beginners

## Getting started
```bash
git clone https://github.com/ngCopenhagen/memory-game
cd memory-game
```
## Setting up the project
```bash
ng new memorygame --directory . --prefix itu
```
## Serve the application
Run following command and open your browser at localhost:4200
```bash
npm start
```
## Change the style file default extension to scss
Please note that this doesn't change existing style-files to the scss file-extension.
Therefore you should rename those files manually.
```bash
ng set defaults.styleExt scss
```
To avoid this in future projects you can set this default extension, when you're creating the application
```bash
ng new memorygame --directory . --prefix itu --styles scss
```