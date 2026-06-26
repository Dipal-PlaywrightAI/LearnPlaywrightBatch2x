function buildEndPoint(base: string, path: string): string {
    return base + path;
}

function issucessCode(code: number): boolean {
    return code >= 200 && code < 400;
}

function logTestStep(step: string): void {
    console.log("[step]" + step);
}

console.log(buildEndPoint("https://api.com", "user"));
console.log("200 is sucess:", issucessCode(200));
console.log("400 is sucess:", issucessCode(404));
console.log("Navigate to login page");