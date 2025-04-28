export const redRoomProject = {
  title: "RedRoom",
  category: "Decentralized Communication Network",
  summary: "A darknet-inspired, zero-logs communication protocol implementing IRC-style architecture with end-to-end encryption.",
  projectUrl: "/chat",
  tags: [
    { name: "Darkweb", color: "bg-red-500/20 text-red-300" },
    { name: "Cryptography", color: "bg-purple-500/20 text-purple-300" },
    { name: "Zero-Trust", color: "bg-green-500/20 text-green-300" },
    { name: "P2P", color: "bg-yellow-400/20 text-yellow-200" }
  ],
  sections: [
    {
      title: "Freedom of Expression",
      content: "<div class='text-xl font-mono text-red-400 mb-4'>IMPORTANT NOTICE</div>\n\nRedRoom is built on the fundamental principle of absolute freedom of expression. We maintain a strict position of non-interference and non-moderation in any communications that occur within the network.\n\n<div class='text-lg text-red-400 my-4'>Disclaimer:</div>\nWe hold no responsibility for the nature or content of communications conducted within rooms. Our platform exists solely to provide unrestricted, uncensored communication channels. Users from any location can engage in unrestricted dialogue without any form of censorship or surveillance.\n\nThis aligns with our core belief in:\n• Absolute freedom of speech\n• Zero content moderation\n• Complete user anonymity\n• Unrestricted global access\n• Total communication privacy",
      highlight: true,
      style: "bg-red-500/5 border-2 border-red-500/30 rounded-lg p-6 my-4"
    },
    {
      title: "Protocol Architecture",
      content: "RedRoom operates on a sophisticated peer-to-peer communication protocol inspired by traditional IRC (Internet Relay Chat) architecture. Built on a zero-trust, zero-logs foundation, the platform implements military-grade encryption for absolute communication privacy.\n\nCore Protocol Features:\n• End-to-end AES-256-GCM encryption\n• Elliptic Curve Diffie-Hellman (ECDH) key exchange\n• Perfect Forward Secrecy (PFS)\n• Quantum-resistant cryptographic primitives\n• Decentralized room creation and management"
    },
    {
      title: "Room Dynamics",
      content: "The system employs an advanced room creation mechanism where each room exists as an ephemeral instance in the network's distributed architecture.\n\nRoom Architecture:\n• Cryptographic room identifiers\n• Temporary memory-only instances\n• Zero-persistence message handling\n• Distributed peer discovery\n• Anti-forensic data sanitization"
    },
    {
      title: "Security Implementation",
      content: "Security is paramount in RedRoom's architecture, implementing multiple layers of protection:\n\nSecurity Stack:\n• Zero-knowledge authentication system\n• Multi-layered encryption protocols\n• Memory-safe runtime environment\n• Anti-tampering mechanisms\n• Secure memory wiping\n• Network traffic obfuscation"
    },
    {
      title: "Authentication Protocol",
      content: "The authentication system employs a sophisticated zero-knowledge proof mechanism:\n\n• Blind signature cryptography\n• Time-based key rotation\n• Hardware-level entropy collection\n• Secure credential management\n• Anti-correlation mechanisms\n\nOnly authenticated users can create or join rooms, with credentials never persisted to storage."
    },
    {
      title: "Technical Architecture",
      content: "Built on a cutting-edge technical stack designed for maximum security and performance:\n\n• Runtime: Hardened Node.js environment\n• Network: WebSocket over TLS 1.3\n• Cryptography: Custom implementation of NaCl\n• Memory: Secure heap management\n• Authentication: Zero-knowledge proofs\n• Storage: Pure memory-based operations"
    },
    {
      title: "Privacy Guarantees",
      content: "RedRoom's fundamental principle is absolute privacy through technical implementation:\n\n• Zero logs policy - no data persistence\n• RAM-only operations\n• Network traffic masking\n• No metadata collection\n• Secure memory overwriting\n• Anti-forensic protocols"
    },
    {
      title: "Usage Protocol",
      content: "<div class='text-xl font-mono text-green-400 mb-4'>Access Sequence:</div>\n\n1. Authenticate through zero-knowledge system\n2. Generate or obtain room cryptographic identifier\n3. Join room through encrypted handshake\n4. Establish secure communication channel\n5. Begin zero-trace communication\n\nAll operations are executed in memory only, leaving no digital footprint."
    },
    {
      title: "System Evolution",
      content: "<div class='font-mono'><div class='text-green-400 text-xl mb-4 glitch'>INITIALIZATION SEQUENCE DETECTED</div>\n\n<div class='text-red-400/80 mb-6'>Classified Protocol Update Status: <span class='text-green-400'>IN PROGRESS</span></div>\n\nDeep within the network, something is evolving. Our development chambers are crafting protocols that will revolutionize secure communication. The next phase approaches silently.</div>",
      highlight: true,
      style: "bg-black/50 border-2 border-green-500/30 rounded-lg p-6 my-4"
    },
    {
      title: null,
      content: "<div class='text-center'><p class='mb-4 text-red-400'>Enter the void. Access secure communication.</p><a href='/chat' class='inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 text-red-300 border border-red-500/40 rounded-lg hover:bg-red-500/30 transition-colors font-mono'>ACCESS NETWORK<svg class='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'/></svg></a></div>",
      highlight: true,
      style: "bg-black border border-red-500/20 rounded-lg p-6 my-4"
    }
  ]
};
