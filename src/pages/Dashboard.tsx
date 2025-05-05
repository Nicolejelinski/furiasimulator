
import React from 'react';

export default function Dashboard() {
    const dados = {
        horarios: {
            melhores: ['18h', '19h', '20h'],
            engajamento: [82, 95, 88] // porcentagem
        },
        jogadores: {
            fallen: { impacto: 92, partidas: 24 },
            art: { impacto: 88, partidas: 22 },
            kscerato: { impacto: 85, partidas: 20 }
        },
        receita: {
            produtos: 142,
            ingressos: 56,
            patrocinios: 42
        },
        mapaFas: {
            brasil: 68,
            eua: 15,
            europa: 12,
            outros: 5
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">

            <header className="bg-black border-b border-red-900/50 p-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src="/images/furia-logo.png"
                            className="h-12 mr-4 opacity-90"
                            alt="FURIA"
                        />
                        <h1 className="text-2xl font-light tracking-wider">
                            <span className="text-white">FURIA</span>
                            <span className="text-red-500 ml-2">ANÁLISE DE FÃS</span>
                        </h1>
                    </div>
                    <div className="text-sm bg-gray-900 text-gray-400 px-4 py-2 rounded-full">
                        ATUALIZADO AGORA
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <section className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                    <h2 className="text-xl font-medium mb-6 text-white border-b border-gray-800 pb-3">
                        MELHORES HORÁRIOS
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-gray-400 mb-3">PICO DE ENGAJAMENTO</h3>
                            <div className="flex items-end h-48 gap-3">
                                {dados.horarios.engajamento.map((porcentagem, index) => (
                                    <div key={index} className="flex-1 flex flex-col items-center">
                                        <div
                                            className="w-full bg-gradient-to-t from-red-900 to-red-600 rounded-t-sm"
                                            style={{ height: `${porcentagem}%` }}
                                        />
                                        <div className="mt-2 text-sm text-gray-300">
                                            {dados.horarios.melhores[index]}
                                        </div>
                                        <div className="text-red-400 font-medium mt-1">
                                            {porcentagem}%
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                            <h3 className="text-gray-400 mb-2">RECOMENDAÇÃO</h3>
                            <p className="text-white">
                                Postar conteúdo principal às <span className="text-red-400">19h</span> (engajamento 95%)
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                    <h2 className="text-xl font-medium mb-6 text-white border-b border-gray-800 pb-3">
                        IMPACTO DOS JOGADORES
                    </h2>

                    <div className="space-y-4">
                        {Object.entries(dados.jogadores).map(([nome, dados]) => (
                            <div key={nome} className="bg-gray-900/80 p-4 rounded-lg border border-gray-800 hover:border-red-500/30 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-white font-medium">
                                            {nome.toUpperCase()}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {dados.partidas} partidas analisadas
                                        </p>
                                    </div>
                                    <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                                        {dados.impacto}%
                                    </div>
                                </div>
                                <div className="mt-2 w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-yellow-600 to-red-500"
                                        style={{ width: `${dados.impacto}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    {/* Mapa */}
                    <div className="relative bg-gray-900 rounded-lg border border-gray-800 p-4 h-96">
                        <h3 className="text-lg font-medium mb-4 text-white">DISTRIBUIÇÃO GLOBAL DE FÃS</h3>

                        <div className="relative h-64 w-full">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDUwMCI+PHBhdGggZD0iTTUwMCwxMDBDNzAwLDEwMCA5MDAsMzAwIDkwMCw1MDAgTTEwMCw1MEMzMDAsNTAgNTAwLDIwMCA1MDAsMzAwIE01MDAsMzAwQzcwMCw0MDAgODAwLDMwMCA5MDAsNDAwIE0xMDAsNDAwQzMwMCwzMDAgNDAwLDQwMCA1MDAsMzAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9zdmc+')]"></div>

                                <div className="absolute" style={{ top: '60%', left: '30%' }}>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-30"></div>
                                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                            68%
                                        </div>
                                        <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-white">
                                            BRASIL
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute" style={{ top: '30%', left: '15%' }}>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30"></div>
                                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs shadow-lg">
                                            15%
                                        </div>
                                        <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-white">
                                            EUA
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute" style={{ top: '25%', left: '50%' }}>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-yellow-500 rounded-full animate-ping opacity-30"></div>
                                        <div className="w-5 h-5 bg-yellow-600 rounded-full flex items-center justify-center text-white text-xs shadow-lg">
                                            12%
                                        </div>
                                        <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-white">
                                            EUROPA
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute" style={{ top: '40%', left: '75%' }}>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gray-500 rounded-full animate-ping opacity-30"></div>
                                        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs shadow-lg">
                                            5%
                                        </div>
                                        <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-white">
                                            OUTROS
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-6 mt-6">
                            {Object.entries(dados.mapaFas).map(([regiao, porcentagem]) => (
                                <div key={regiao} className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full mr-2 ${
                                        regiao === 'brasil' ? 'bg-red-500' :
                                            regiao === 'eua' ? 'bg-blue-500' :
                                                regiao === 'europa' ? 'bg-yellow-500' : 'bg-gray-500'
                                    }`} />
                                    <span className="text-sm text-gray-300">
          {regiao.toUpperCase()}
        </span>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                        <h2 className="text-xl font-medium mb-4 text-white border-b border-gray-800 pb-3">
                            OPORTUNIDADES
                        </h2>

                        <div className="grid grid-cols-3 gap-4">
                            <Metrica
                                titulo="Produtos"
                                valor={dados.receita.produtos}
                                cor="red"
                            />
                            <Metrica
                                titulo="Ingressos"
                                valor={dados.receita.ingressos}
                                cor="yellow"
                            />
                            <Metrica
                                titulo="Patrocínios"
                                valor={dados.receita.patrocinios}
                                cor="blue"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

type CoresValidas = 'red' | 'yellow' | 'blue';

const Metrica = ({ titulo, valor, cor }: {
    titulo: string;
    valor: number;
    cor: CoresValidas
}) => {
    const cores = {
        red: 'from-red-500 to-red-700',
        yellow: 'from-yellow-500 to-yellow-700',
        blue: 'from-blue-500 to-blue-700'
    };

    return (
        <div className={`bg-gradient-to-br ${cores[cor]} p-4 rounded-lg text-center`}>
            <div className="text-white/80 text-sm">{titulo}</div>
            <div className="text-2xl font-bold text-white">{valor}</div>
        </div>
    );
};