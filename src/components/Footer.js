// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <p>© 2025 MyCrypto. Tutti i diritti riservati.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">Discord</a>
          <a href="#" className="hover:text-gray-400">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
