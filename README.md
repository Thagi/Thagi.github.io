# Slide Logic Public Site

Static GitHub Pages source for the public websites of the Slide Logic puzzle apps.

Intended production URL:
- Root: `https://thagi.github.io/`
- Slide Logic: Color: `https://thagi.github.io/color/`
- Slide Logic: Number: `https://thagi.github.io/number/`
- app-ads.txt: `https://thagi.github.io/app-ads.txt`

The root-level `app-ads.txt` is important for AdMob. If this site is instead published as a project page such as `https://thagi.github.io/slide-logic/`, AdMob will not find `app-ads.txt` at the domain root unless the `Thagi.github.io` root site also serves it.

## Publish

After GitHub CLI authentication is fixed:

```sh
cd /Users/thagi/work/game/ice-sliding/public_site
git init
git add .
git commit -m "Publish slide logic public site"
gh repo create Thagi/Thagi.github.io --public --source=. --push
```

If `Thagi/Thagi.github.io` already exists:

```sh
cd /Users/thagi/work/game/ice-sliding/public_site
git init
git remote add origin git@github.com:Thagi/Thagi.github.io.git
git add .
git commit -m "Update slide logic public site"
git push -u origin main
```
