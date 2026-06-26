class BaseTest {
    setup() {
        console.log("Base: OPen Browser");
    }
}
class APITest extends BaseTest {

    setup() {

        console.log("APITEst: OPen Browser");
    }
}

const test = new APITest();
test.setup();
