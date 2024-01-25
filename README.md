## About

A web extension that redirects _Twitter, YouTube, Google Maps, Reddit, Google Search, & Google Translate_ requests to privacy friendly alternative frontends for those sites - [Nitter](https://github.com/zedeus/nitter), [Invidious](https://github.com/iv-org/invidious), [FreeTube](https://github.com/FreeTubeApp/FreeTube), [OpenStreetMap](https://www.openstreetmap.org/), [SimplyTranslate](https://git.sr.ht/~metalune/simplytranslate_web) and [Startpage](https://startpage.com).

## To-Do

### . Update dependencies to fix vulnerabilities.

### . Merge Watch on Odysee or make equivalent which redirects Invidious channels to Odysee channels if available ( this will be made optional in settings )

### . Remove support for Bibliogram.

### . Make new icon for Privacy-Redirect-2.

### Custom instances

Privacy Redirect allows setting custom instances, instances can be found here:

- [Nitter instances](https://github.com/zedeus/nitter/wiki/Instances)
- [Invidious instances](https://docs.invidious.io/Invidious-Instances.md)
- [SimplyTranslate instances](https://git.sr.ht/~metalune/simplytranslate_web#list-of-instances)
- [OpenStreetMap tile servers](https://wiki.openstreetmap.org/wiki/Tile_servers)
- Reddit alternatives:
  - [Libreddit](https://github.com/spikecodes/libreddit#instances)
  - [Old Reddit](https://old.reddit.com) & [Mobile Reddit](https://i.reddit.com), purported to be more privacy respecting than the new UI.
- Google Search alternatives:
  - [SearX](https://searx.github.io/searx/)
  - [Startpage](https://startpage.com)
  - [Disroot](https://search.disroot.org)
  - [Presearch](https://www.presearch.org)
  - [Whoogle](https://benbusby.com/projects/whoogle-search/)

## How to install

### Install Dependencies

- [Node.js](https://nodejs.org/) >=10.0.0 installed
- `npm install`

### Build

- `npm run build`
- `open web-ext-artifacts/`

## Test

- `npm run test`

## License

[GPLv3](LICENSE).

## Privacy Policy

See the [Project Wiki](https://github.com/SimonBrazell/privacy-redirect/wiki/Privacy-Policy).
