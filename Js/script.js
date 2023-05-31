import ScrollSuave from "./Modulos/Scrool-suave.js";
import InitAnimacaoScroll from "./Modulos/Scrool-animação.js";
import initAccordion from "./Modulos/Accordion.js";
import initTabNav from "./Modulos/tabNav.js";
import initModal from "./Modulos/modal.js";
import initTooltip from "./Modulos/tooltip.js";
import initDropdownMenu from "./Modulos/dropDown-Menu.js";
import initMenuMobile from "./Modulos/menu-mobile.js";
import InitFuncionamento from "./Modulos/funcionamento.js";
import InitFetchAnimais from "./Modulos/fetch-animais.js";
import InitFetchBitcoin from "./Modulos/fetch-bitcoin.js";


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

InitAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
InitFuncionamento();
InitFetchAnimais();
InitFetchBitcoin();
