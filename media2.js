if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
console.log("Let's get this party started")
}
navigator.mediaDevices.getUserMedia({audio:true, video:true})
async function getDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
}