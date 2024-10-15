import React, { useEffect, useState } from 'react';
import Cards from "../RelatoriosPendentes/Cards";

const Main = () => {
    const [isDialogOpenAddRelatorio, setIsDialogOpenAddRelatorio] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [empresa, setEmpresa] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [relatorios, setRelatorios] = useState([]);
    const [evento, setEvento] = useState(false);

    const [historicoRelatorios, setHistoricoRelatorios] = useState([]);

    const generateRandomId = () => {
        return Math.floor(Math.random() * 1000) + 1;
    };

    const saveDataLocalStorage = (dadosSubmitEmpresa) => {
        const relatoriosExistentes = JSON.parse(localStorage.getItem("relatorios")) || [];
        relatoriosExistentes.push(dadosSubmitEmpresa);
        localStorage.setItem("relatorios", JSON.stringify(relatoriosExistentes));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsDialogOpenAddRelatorio(false);

        const dadosSubmitEmpresa = {
            id: generateRandomId(),
            empresa,
            descricao,
            dataInicial,
            dataFinal,
        };

        saveDataLocalStorage(dadosSubmitEmpresa);
        setEvento(true);

        setEmpresa('');
        setDescricao('');
        setDataInicial('');
        setDataFinal('');
    };

    const getRelatorioLocalStorage = () => {
        setRelatorios(JSON.parse(localStorage.getItem("relatorios")) || []);
    };

    const handleCardClick = (item) => {
        setSelectedCard(item);
        setIsDialogOpen(true);
    };

    const handleDelete = async () => {
        // Atualiza o histórico de relatórios
        setHistoricoRelatorios([...historicoRelatorios, selectedCard]); // Adiciona o item selecionado ao histórico
        await salvarHistoricoRelatorios(); // Chama a função para salvar o histórico

        // Atualiza os relatórios
        const updatedRelatorios = relatorios.filter((item) => item.id !== selectedCard.id);
        setRelatorios(updatedRelatorios);
        localStorage.setItem("relatorios", JSON.stringify(updatedRelatorios));
        setIsDialogOpen(false);
        setSelectedCard(null);
    };

    const handleDeleteHistoryRelatorios = () => {
        setHistoricoRelatorios([]); // Define o histórico como um array vazio
        localStorage.setItem("historicoRelatorios", JSON.stringify([])); // Atualiza o localStorage para um array vazio
    };

    const salvarHistoricoRelatorios = async () => {
        const historicoRelatoriosExistentes = JSON.parse(localStorage.getItem("historicoRelatorios")) || [];
        historicoRelatoriosExistentes.push(selectedCard); // Adiciona o item selecionado ao histórico existente
        localStorage.setItem("historicoRelatorios", JSON.stringify(historicoRelatoriosExistentes));
    };

    const gethistoricoRelatoriosExistentes = () => {
        setHistoricoRelatorios(JSON.parse(localStorage.getItem("historicoRelatorios")) || []);
    }

    useEffect(() => {
        getRelatorioLocalStorage();
        gethistoricoRelatoriosExistentes();
        if (evento) {
            setEvento(!evento);
        }
    }, [evento]);

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen p-4">
            {/* Container Principal */}
            <div className="flex flex-col md:flex-col w-full max-w-[1280px] gap-4">
                {/* Componente Esquerdo */}
                <div className='flex w-full gap-4'>
                    <div className="bg-[#191919] rounded-lg w-full md:w-[60%] p-6 shadow-md">
                        {/* Conteúdo dentro do componente esquerdo */}
                    </div>
                    {/* Histórico */}
                    <div className="flex flex-col bg-[#191919] rounded-lg p-4 space-y-4 md:w-[20%] max-h-[500px] overflow-y-auto">
                        <h3 className="text-white font-bold text-lg">Histórico</h3>
                        {
                            historicoRelatorios.length > 0 && (
                                <div>
                                    <button className="text-primary" onClick={() => { handleDeleteHistoryRelatorios() }}>Limpar Historico</button>
                                </div>
                            )
                        }
                        {historicoRelatorios.map((item) => (
                            <div key={item.id}>
                                <Cards
                                    empresa={item.empresa}
                                    // descricao={item.descricao}
                                    // dataInicial={item.dataInicial}
                                    dataFinal={item.dataFinal}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex rounded-lg w-full md:w-[60%] gap-4">
                    <div className="bg-[#191919] rounded-lg w-full md:w-[50%] p-6 shadow-md">
                        {/* Conteúdo dentro do componente esquerdo */}
                    </div>
                    <div className="flex bg-[#191919] rounded-lg w-full md:w-[50%] p-6 shadow-md justify-center align-middle">
                        {/* Conteúdo dentro do componente esquerdo */}
                        <h1 className="text-5xl text-primary">
                            +50
                        </h1>
                    </div>
                </div>
            </div>

            {/* Relatórios Pendentes */}
            <div className="bg-[#191919] rounded-lg w-full md:w-[500px] p-6 mt-6 shadow-md">
                <div className="flex justify-between items-center">
                    <h3 className="text-white font-bold text-lg">Relatórios Pendentes</h3>
                    <button
                        className="flex justify-center items-center rounded-full bg-primary w-8 h-8"
                        onClick={() => setIsDialogOpenAddRelatorio(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col space-y-4 mt-4 max-h-[400px] overflow-y-auto">
                    {relatorios.map((item) => (
                        <div key={item.id} onClick={() => handleCardClick(item)}>
                            <Cards
                                empresa={item.empresa}
                                descricao={item.descricao}
                                dataInicial={item.dataInicial}
                                dataFinal={item.dataFinal}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal para cadastro de novo relatório */}
            {isDialogOpenAddRelatorio && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-[#191919] rounded-lg p-6 w-3/4 shadow-lg">
                        <h3 className="text-white font-bold text-xl mb-4">Cadastrar Novo Relatório</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="empresa"
                                placeholder="Nome da Empresa"
                                value={empresa}
                                onChange={(e) => setEmpresa(e.target.value)}
                                className="w-full p-2 mb-2 rounded bg-custom-black text-neutral-200"
                                required
                            />
                            <textarea
                                name="descricao"
                                placeholder="Descrição"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                className="w-full p-2 mb-2 rounded bg-custom-black text-neutral-200"
                                required
                            />
                            <input
                                type="date"
                                name="dataInicial"
                                value={dataInicial}
                                onChange={(e) => setDataInicial(e.target.value)}
                                className="w-full p-2 mb-2 rounded bg-custom-black text-neutral-200"
                                required
                            />
                            <input
                                type="date"
                                name="dataFinal"
                                value={dataFinal}
                                onChange={(e) => setDataFinal(e.target.value)}
                                className="w-full p-2 mb-2 rounded bg-custom-black text-neutral-200"
                                required
                            />
                            <div className="flex justify-between mt-4">
                                <button type="button" className="bg-custom-black text-neutral-500 rounded px-4 py-2" onClick={() => setIsDialogOpenAddRelatorio(false)}>Cancelar</button>
                                <button type="submit" className="bg-primary text-neutral-900 rounded px-4 py-2">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal para exibir detalhes do card selecionado */}
            {isDialogOpen && selectedCard && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-[#191919] rounded-lg p-6 w-full max-w-[768px] shadow-lg">
                        {/* Conteúdo do modal */}
                        <h1 className='text-neutral-200 font-semibold mt-3'>Empresa: {selectedCard.empresa}</h1>
                        <h2 className='text-neutral-200 font-semibold mt-3'>Descrição: {selectedCard.descricao}</h2>
                        <div className="flex gap-52">
                            <h2 className='text-neutral-200 font-semibold mt-3'>Data Inicial: {selectedCard.dataInicial}</h2>
                            <h2 className='text-primary font-semibold mt-3 italic'>Data Final: {selectedCard.dataFinal}</h2>
                        </div>
                        <div className='flex gap-80'>
                            <button className='flex align-middle justify-center rounded-lg p-0  mt-3 bg-red-600 w-16 h-7 text-neutral-200' onClick={handleDelete}>Excluir</button>
                            <button className='flex align-middle justify-center rounded-lg p-0  mt-3 bg-primary w-16 h-7' onClick={() => setIsDialogOpen(false)}>Sair</button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Main;
