import { useState } from 'react';

const jogadores = [
    {
        nome: "🔫 FalleN",
        titulo: "O PAI TÁ ON",
        descricao: "Você é o líder nato, aquele que segura a base quando o time tá perdido. Seu PC tem 3 monitores: um pro jogo, outro pra analisar demos e mais um só pra ver estatísticas. Vive postando thread motivacional no Twitter, mas passa madrugadas no Faceit. Quando entra num servidor, o pessoal já pergunta: 'É o FalleN mesmo ou só mais um fã?'. Seu lema é 'respeita a história', mesmo quando erra aquela molotov básica. Na vida real seria o professor que todo mundo ama, mas que dá prova surpresa na segunda-feira.",
        imagem: "/images/fallen.png",
        cor: "text-yellow-400",
        jogos: ["CS2", "Valorant"]
    },
    {
        nome: "😈 arT",
        titulo: "O DEMÔNIO DA RUSHA",
        descricao: "Você é o caos em pessoa. O coach fala 'vamos de slow round' e você já tá rushando B sozinho com uma Deagle. Se fosse dirigir, seria o motoqueiro que corta entre os carros no corredor. Tem dois modos: 0 kills ou carryar o time. Quando acerta um tiro difícil, grita 'VAMOOOO' tão alto que os vizinhos reclamam. Seu histórico de jogo tem mais reports por 'jogar demais' do que por toxicidade. Na vida real seria o cara que pula de paraquedas todo fim de semana e acha relaxante.",
        imagem: "/images/art.png",
        cor: "text-red-500",
        jogos: ["CS2", "Valorant"]
    }
];

export default function DescubraPage() {
    const [etapa, setEtapa] = useState<'inicio' | 'login' | 'jogo' | 'nick' | 'resultado'>('inicio');
    const [jogador, setJogador] = useState<any>(null);
    const [jogoSelecionado, setJogoSelecionado] = useState<string | null>(null);
    const [carregando, setCarregando] = useState(false);

    const iniciarSimulacao = () => {
        setCarregando(true);
        setTimeout(() => {
            setCarregando(false);
            setEtapa('login');
        }, 1500);
    };

    const selecionarJogo = (jogo: string) => {
        setJogoSelecionado(jogo);
        setEtapa('nick');
    };

    const finalizarAnalise = () => {
        setCarregando(true);
        setTimeout(() => {
            setJogador(jogadores[Math.floor(Math.random() * jogadores.length)]);
            setEtapa('resultado');
            setCarregando(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMCwwLDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-30" />

            <div className="relative z-10 max-w-2xl mx-auto p-6 min-h-screen flex flex-col justify-center">
                {etapa === 'inicio' && (
                    <div className="text-center animate-fade-in">
                        <img
                            src="/images/furia-logo.png"
                            alt="FURIA Esports"
                            className="w-40 mx-auto mb-8 hover:scale-105 transition-transform"
                        />
                        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 font-mono tracking-tighter">
                            QUAL FURIAZÃO É VOCÊ?
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 tracking-wider">
                            Descubra qual jogador combina com seu estilo de jogo
                        </p>
                        <button
                            onClick={iniciarSimulacao}
                            className="relative overflow-hidden bg-gradient-to-br from-red-800 to-red-900 text-white px-8 py-4 rounded-lg border-2 border-red-600 font-bold text-lg tracking-wider hover:from-red-700 hover:to-red-800 transition-all duration-300 group"
                        >
     <span className="relative z-10 flex items-center justify-center gap-2">
    <img
        src="/images/x-logo.png"
        className="w-6 h-6"
        alt="X"
    />
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
      LOGAR PARA INICIAR
    </span>
  </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12" />
                        </button>
                    </div>
                )}

                {carregando && (
                    <div className="text-center py-20">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mb-6" />
                        <p className="text-xl text-red-400">ANALISANDO SEU PERFIL...</p>
                    </div>
                )}

                {etapa === 'login' && !carregando && (
                    <div className="text-center bg-gray-900/80 p-8 rounded-xl border border-gray-800 backdrop-blur-sm">
                        <h2 className="text-3xl font-bold mb-6 text-red-500">SELECIONE SEU JOGO</h2>
                        <div className="grid grid-cols-1 gap-4 max-w-xs mx-auto">
                            {['CS2', 'Valorant', 'League of Legends'].map((jogo) => (
                                <button
                                    key={jogo}
                                    onClick={() => selecionarJogo(jogo)}
                                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-gray-700 hover:border-red-500 transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <img
                                        src={`/images/${jogo === 'League of Legends' ? 'lol' : jogo.toLowerCase()}-icon.png`}
                                        alt={jogo}
                                        className="w-6 h-6"
                                    />
                                    {jogo}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {etapa === 'nick' && !carregando && (
                    <div className="text-center bg-gray-900/80 p-8 rounded-xl border border-gray-800 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-6 text-white">
                            DESEJA INFORMAR SEU NICK NO {jogoSelecionado?.toUpperCase()} PARA MELHOR ANÁLISE?
                        </h2>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={finalizarAnalise}
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
                            >
                                SIM, ADICIONAR NICK
                            </button>
                            <button
                                onClick={finalizarAnalise}
                                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg border border-gray-700 transition-colors"
                            >
                                DEIXAR PARA PRÓXIMA
                            </button>
                        </div>
                    </div>
                )}

                {etapa === 'resultado' && jogador && (
                    <div className="text-center bg-gray-900/90 p-6 rounded-xl border border-gray-800 backdrop-blur-sm">
                        <div className="relative mb-8 mx-auto w-48 h-48">
                            <div className={`absolute inset-0 rounded-full border-4 ${jogador.cor.replace('text', 'border')} opacity-30 animate-spin-slow`} />
                            <img
                                src={jogador.imagem}
                                alt={jogador.nome}
                                className="w-full h-full object-cover rounded-full border-4 border-white relative z-10"
                            />
                        </div>

                        <h2 className={`text-4xl font-bold mb-2 ${jogador.cor}`}>{jogador.nome}</h2>
                        <h3 className="text-2xl font-semibold mb-6 text-white">{jogador.titulo}</h3>

                        <div className="bg-black/50 p-6 rounded-lg border border-gray-800 text-left mb-8">
                            <p className="text-gray-200 leading-relaxed">{jogador.descricao}</p>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => setEtapa('inicio')}
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
                            >
                                TESTAR NOVAMENTE
                            </button>
                            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg border border-gray-700 transition-colors">
                                COMPARTILHAR
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}