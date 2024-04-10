const { expect } = require('@playwright/test');

exports.LeftBarMenu = class LeftBarMenu {
  constructor(page) {
    this.page = page;
    this.leftMenuButoon = page.locator('#react-burger-menu-btn')
    this.allItemMenuButton = page.locator('#inventory_sidebar_link')
    this.aboutMenuButton =page.locator('#about_sidebar_link')
    this.logoutMenuButton = page.locator('#logout_sidebar_link')
    this.resetAppStateMenuButton = page.locator('#reset_sidebar_link')
    this.closeButton = page.locator('#react-burger-cross-btn')
    
  }

  async openLeftMenuBar() {
    await this.leftMenuButoon.click();
  }


  getAllItemMenuButton() {
    return this.allItemMenuButton;
  }

  getAboutMenuButton() {
    return this.aboutMenuButton;
  }

  getLogoutMenuButton() {
    return this.logoutMenuButton;
  }

  getResetAppStateMenuButton() {
    return this.resetAppStateMenuButton;
  }

  getCloseButton() {
    return this.closeButton;
  }



}
