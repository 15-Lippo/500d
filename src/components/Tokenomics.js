// src/components/Tokenomics.js
export default function Tokenomics() {
  return (
    <div id="tokenomics" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Tokenomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Distribuzione</h3>
            <p>60% Vendita pubblica</p>
            <p>20% Team</p>
            <p>10% Riserve</p>
            <p>10% Community</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Dettagli</h3>
            <p>Offerta totale: 1.000.000.000 token</p>
            <p>Prezzo iniziale: $0.01</p>
          </div>
        </div>
      </div>
    </div>
  );
}
