class BasePage {
    constructor(PageNAMe) {
        this.PageNAMe = PageNAMe;
    }

    open() {
        console.log("opening the page");
    }
    close() {
        console.log("Closing the Page");
    }
}
class LoginPage extends BasePage {
}

const page = new LoginPage();
page.open();
page.close();
