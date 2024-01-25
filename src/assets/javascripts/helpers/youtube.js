const targets = [
  "m.youtube.com",
  "youtube.com",
  "img.youtube.com",
  "www.youtube.com",
  "youtube-nocookie.com",
  "www.youtube-nocookie.com",
  "s.ytimg.com",
  "music.youtube.com",
];
/*
  Please remember to also update the manifest.json file
  (content_scripts > matches, 'persist-invidious-prefs.js')
  when updating this list:
*/
const redirects = [
  "https://invidious.fdn.fr",
  "https://invidious.nerdvpn.de",
  "https://invidious.lunar.icu",
  "https://invidious.io.lol",
  "https://inv.tux.pizza",
  "https://invidious.projectsegfau.lt",
  "https://yt.artemislena.eu",
  "https://vid.priv.au",
  "https://inv.zzls.xyz",
  "https://invidious.protokolla.fi",
  "https://yt.oelrichsgarcia.de",
  "https://invidious.asir.dev",
  "https://iv.ggtyler.dev",
  "https://iv.nboeck.de",
  "https://inv.in.projectsegfau.lt",
  "https://invidious.private.coffee",
  "https://iv.datura.network",
  "https://anontube.lvkaszus.pl",
  "https://invidious.drgns.space",
  "https://inv.us.projectsegfau.lt",
  "https://invidious.perennialte.ch",
  "https://invidious.einfachzocken.eu",
  "https://invidious.slipfox.xyz",
  "https://invidious.no-logs.com",
  "https://yt.drgnz.club",
  "https://yt.cdaut.de",
  "https://yewtu.be",
  "https://iv.melmac.space",
  "https://invidious.privacydev.net",
  "https://vid.puffyan.us",
];

export default {
  targets,
  redirects,
};
