// src/components/WalletButton.js
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function WalletButton() {
  const { connected } = useWallet();

  return (
    <div>
      {!connected ? (
        <WalletMultiButton className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700" />
      ) : (
        <p className="text-green-500">Wallet Connesso!</p>
      )}
    </div>
  );
}
