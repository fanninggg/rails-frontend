require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
import 'bootstrap';
import { updateNavbarOnScroll } from '../components/navbar';
import { loadDynamicBannerText } from '../components/banner';

// const a=(b)=>{const c=b.split(' ')[0];console.log(`Hi there ${c}`);};a("Ben Fanning")

document.addEventListener('turbolinks:load', () => {
	updateNavbarOnScroll();
	loadDynamicBannerText();
});
