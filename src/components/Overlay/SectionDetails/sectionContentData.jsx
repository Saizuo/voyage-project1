// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "Welcome to Voyage 43, Explorer!",
    content: (
      <p>
        A boundless world awaits. Dive into a universe teeming with unique characters, fantastical realms, 
        and powerful cards to collect. 
        Craft your strategy, assemble your team, and embark on an unforgettable adventure.
      </p>
    ),
  },
  { key: "team", title: "Explorers", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Socials And Links",
    content: (
      <ul className="credits">
        <li>
          <a href="https://pump.fun/8zCF7cConjc9haM5MCVQr6F63oKQvqSfTnYMmCMypump">Pump.Fun</a>
        </li>
        <li>
          <a href="https://t.me/voyage43">Telegram</a>
        </li>
        <li>
          <a href="https://x.com/voyage43sol">Twitter</a>
        </li>
        <li>
          <a href="https://dexscreener.com/">Dexscreener</a>
        </li>
        <li>
          <a href="https://jup.ag/">Jupiter Swap</a>
        </li>
      </ul>
    ),
  },
];

export default sectionsContentData;
