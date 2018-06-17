const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});
{"token":"NDU3NjEwNjkwNzYxNDU3NjY2.DgbpXA.cALmCujfytuN_lUfKIXGGLxyVm0","client":"ekF-58pfdJHtJxxDKH","tag":"!","case":"true","separator":"\\s+","ownerId":"WhitesBey#4995"}

}
