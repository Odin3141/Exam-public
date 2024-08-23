navigator.mediaDevices.getUserMedia({audio:true, video:true})
async function getDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
}