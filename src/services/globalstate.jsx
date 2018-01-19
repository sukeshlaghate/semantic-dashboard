import { observable, computed } from "mobx";

@observable
class GlobalState {
  @observable sidebarExpanded = false;
  @observable isLoggedIn = false;

  @computed
  get isSidebarExpanded() {
    return this.sidebarExpanded;
  }

  @computed
  get isUserLoggedIn() {
    return this.isLoggedIn;
  }

  @observable
  set isSidebarExpanded(value) {
    this.sidebarExpanded = value;
  }

  @observable
  toggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
  }

  @observable
  set isUserLoggedIn(loggedIn) {
    this.isLoggedIn = loggedIn;
  }
}