import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bienvenue chez AVI EMPIRE ! Comment puis-je vous aider ?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    let botReply = "Merci pour votre message. Je vais vous aider.";
    const msg = input.toLowerCase();

    if (msg.includes("produit")) {
      botReply = "Nous proposons des eBooks, templates, formations pour booster vos revenus.";
    } else if (msg.includes("commande")) {
      botReply = "Pour vos commandes, vous pouvez payer via mobile money et recevez un lien de téléchargement instantané.";
    } else if (msg.includes("avi empire")) {
      botReply = "AVI EMPIRE : L’intelligence au service du digital rentable.";
    } else {
      botReply = "Pouvez-vous préciser votre demande ?";
    }

    const botMsg = { from: "bot", text: botReply };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">AVI EMPIRE</h1>
        <p className="text-xl text-gray-700 italic">L’intelligence au service du digital rentable</p>
      </header>

      <main className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Nos produits</h2>
          <ul className="space-y-3 text-gray-800">
            <li>📘 eBooks exclusifs</li>
            <li>📦 Templates prêts à l’emploi</li>
            <li>🎓 Formations en ligne rentables</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Voir la boutique
          </button>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Assistant intelligent</h2>
          <div className="bg-white p-4 rounded shadow h-96 flex flex-col">
            <div className="flex-1 overflow-y-auto mb-4">
              {messages.map((m, i) => (
                <p
                  key={i}
                  className={`p-2 rounded max-w-xs ${m.from === "bot" ? "bg-blue-100 self-start" : "bg-green-100 self-end"}`}
                >
                  {m.text}
                </p>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                className="flex-1 border border-gray-300 rounded px-3 py-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez une question..."
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
              >
                Envoyer
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center mt-12 text-gray-500 text-sm">
        &copy; 2025 AVI EMPIRE. Tous droits réservés.
      </footer>
    </div>
  );
}
