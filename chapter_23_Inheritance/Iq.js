class BaseTest {
    setup() {
        console.log("Base:open browser")
    }

    teardown() {
        console.log("BaseTest:close browser")

    }
}

class UITest extends BaseTest {
    setup() {
        super.setup();
        console.log("UITest:open browser")
    }

    teardown() {
        super.teardown();
        console.log("UITest:close browser")

    }
}

let test = new UITest();
test.setup();
test.teardown();