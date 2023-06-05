import outsideClick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    // Define touchstart e clique como argumento padrão de events caso o usuário não defina
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdownMenu e adiciona a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();

    const element = event.currentTarget;
    element.classList.add("active");
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  // Adiciona os eventos ao dropdownMenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
