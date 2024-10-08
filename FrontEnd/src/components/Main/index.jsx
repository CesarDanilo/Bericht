import React, { useEffect, useState } from 'react';
import Cards from "../RelatoriosPendentes/Cards";

const Main = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [empresa, setEmpresa] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');

    const [relatorios, setRelatorios] = useState([]);

    const generateRandomId = () => {
        return Math.floor(Math.random() * 1000) + 1;
    };

    const saveDataLocalStorage = (dadosSubmitEmpresa) => {
        const relatoriosExistentes = JSON.parse(localStorage.getItem("relatorios")) || [];
        relatoriosExistentes.push(dadosSubmitEmpresa);
        localStorage.setItem("relatorios", JSON.stringify(relatoriosExistentes));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir o comportamento padrão do formulário

        setIsDialogOpen(false);

        const dadosSubmitEmpresa = {
            id: generateRandomId(),
            empresa,
            descricao,
            dataInicial,
            dataFinal,
        };

        saveDataLocalStorage(dadosSubmitEmpresa);
        console.log(JSON.parse(localStorage.getItem("relatorios")));

        // Limpar os campos após o envio
        setEmpresa('');
        setDescricao('');
        setDataInicial('');
        setDataFinal('');
    };

    const getRelatorioLocalStorege = () => {
        setRelatorios(JSON.parse(localStorage.getItem("relatorios")) || []);
    };

    useEffect(() => {
        getRelatorioLocalStorege();
    }, []);

    return (
        <div className='flex flex-col md:flex-row justify-center items-center h-screen'>
            {/* div componente da esquerda */}
            <div className='bg-[#191919] rounded-[5px] w-full md:w-[700px] h-auto p-4 m-4'>
                {/* Conteúdo do componente esquerdo */}
            </div>

            {/* div componente da direita */}
            <div className='bg-[#191919] rounded-[5px] w-full md:w-[500px] h-auto p-4 m-4'>
                {/* Label e button green */}
                <div className="flex justify-between">
                    <h3 className="text-neutral-200">Relatórios pendentes</h3>
                    <button
                        className="flex align-middle justify-center rounded-lg p-0 bg-primary w-14 h-6"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
                {/* Cards de relatórios pendentes */}
                <div className="flex-col p-3 space-y-3 mt-3">
                    {relatorios.map((item) => (
                        <Cards
                            key={item.id}
                            empresa={item.empresa}
                            descricao={item.descricao}
                            dataInicial={item.dataInicial}
                            dataFinal={item.dataFinal}
                        />
                    ))}
                </div>
            </div>

            {/* Dialog para cadastro de novo relatório */}
            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-[#191919] rounded-lg p-6 w-80">
                        <h3 className="text-neutral-200 mb-4">Cadastrar Novo Relatório</h3>
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
                                <button type="button" className="bg-custom-black text-neutral-500 rounded px-4 py-2" onClick={() => setIsDialogOpen(false)}>Cancelar</button>
                                <button type="submit" className="bg-primary text-neutral-900 rounded px-4 py-2">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Main;
