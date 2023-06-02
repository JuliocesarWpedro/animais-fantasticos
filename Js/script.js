import ScrollSuave from "./Modulos/Scrool-suave.js";
import InitAnimacaoScroll from "./Modulos/Scrool-animação.js";
import Accordion from "./Modulos/Accordion.js";
import TabNav from "./Modulos/tabNav.js";
import Modal from "./Modulos/modal.js";
import Tooltip from "./Modulos/tooltip.js";
import initDropdownMenu from "./Modulos/dropDown-Menu.js";
import initMenuMobile from "./Modulos/menu-mobile.js";
import InitFuncionamento from "./Modulos/funcionamento.js";
import fetchAnimais from "./Modulos/fetch-animais.js";
import fetchBitcoin from "./Modulos/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li img", "[data-tab='content'] section");
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initDropdownMenu();
initMenuMobile();
InitFuncionamento();

fetchAnimais("../../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");


InitAnimacaoScroll();
