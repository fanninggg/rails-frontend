import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Hello class", "JS is fun"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText }