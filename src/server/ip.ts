import os from 'os';

// Default to localhost if no valid IP is found
let _ip = '127.0.0.1';

const interfaces = os.networkInterfaces();
// Common VPN interface names
const excludedInterfaces = ['tun0', 'tun1', 'ppp0'];
// Typical LAN interface names
const includedInterfaces = ['Ethernet', 'Wi-Fi', 'en0', 'eno1', 'eth0', 'wlan0', 'wlan1'];

for (const [key, value] of Object.entries(interfaces)) {
  // Check if the interface is not excluded and is included in our list
  if (
    !excludedInterfaces.includes(key) &&
    includedInterfaces.some(interfaceName => key.includes(interfaceName))
  ) {
    const validAddress = value?.find(alias => alias.family === 'IPv4' && !alias.internal);
    if (validAddress) {
      _ip = validAddress.address;
      break;
    }
  }
}

const ip = _ip;

export default ip;
export {ip};
