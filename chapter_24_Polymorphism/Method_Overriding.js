class BaseTest {
    setup() {
        console.log("Base:Open Browser");
    }
}

class APIPage extends BaseTest {
    setup() {
        console.log("APITESt: OPen Browser");
    }
}
let test = new APIPage();
test.setup();