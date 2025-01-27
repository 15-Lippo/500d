// src/components/Roadmap.js
export default function Roadmap() {
  return (
    <div id="roadmap" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Roadmap</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q1 2025: Lancio del Token</h3>
            <p>Vendita pubblica e listing su DEX.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Q2 2025: Integrazioni DeFi</h3>
            <p>Partnership con protocolli DeFi su Solana.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
