
import WalletButton from './WalletButton';

export default function HeroSection() {
  return (
    <div className="bg-gray-900 text-white py-32">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Benvenuto su MyCrypto</h1>
        <p className="text-xl mb-8">La rivoluzione della finanza decentralizzata su Solana</p>
        <WalletButton />
      </div>
    </div>
  );
}
