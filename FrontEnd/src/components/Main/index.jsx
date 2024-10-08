// import Cards from "../RelatoriosPendentes/Cards"

// const Main = () => {
//     return (
//         <div className='flex flex-col md:flex-row justify-center items-center h-screen'>
//             {/* div componente da esquerda */}
//             <div className='bg-[#191919] rounded-[5px] w-full md:w-[700px] h-auto p-4 m-4'>
//                 {/* Conteúdo do componente esquerdo */}
//             </div>
//             {/* div componente da direita */}
//             <div className='bg-[#191919] rounded-[5px] w-full md:w-[500px] h-auto p-4 m-4'>
//                 {/* Conteúdo do componente direito */}
//                 {/* Label e buttton green */}
//                 <div className="flex justify-between">
//                     <h3 className="text-neutral-200">Relatorios pendentes</h3>
//                     <button
//                         className=" flex align-middle  justify-center rounded-lg p-0 bg-primary w-14 h-6 ">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//                         </svg>
//                     </button>
//                 </div>
//                 {/* Cards de relatorios pendentes */}
//                 <div className="flex-col p-3 space-y-3 mt-3" >
//                     <Cards
//                         empresa={"Nome da empresa aqui"}
//                         descricao={"Descrição do relatorio"}
//                         dataInicial={"01/10/2024"}
//                         dataFinal={"01/10/2024"}
//                     />
//                     <Cards
//                         empresa={"Nome da empresa aqui"}
//                         descricao={"Descrição do relatorio"}
//                         dataInicial={"01/10/2024"}
//                         dataFinal={"01/10/2024"}
//                     />
//                     <Cards
//                         empresa={"Nome da empresa aqui"}
//                         descricao={"Descrição do relatorio"}
//                         dataInicial={"01/10/2024"}
//                         dataFinal={"01/10/2024"}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Main;


import React, { useEffect, useState } from 'react';
import Cards from "../RelatoriosPendentes/Cards";

const Main = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newReport, setNewReport] = useState({
        empresa: '',
        descricao: '',
        dataInicial: '',
        dataFinal: ''
    });

    const [getDadosRelatorioLocal, setGetDadosRelatorioLocal] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReport((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para salvar o novo relatório
        console.log('Novo Relatório:', newReport);
        localStorage.setItem("Lista-de-relatorios", newReport);
        setIsDialogOpen(false); // Fecha o diálogo após o envio
        clearNextSubmitButton();
    };

    const getDataRelatoriosLocalStorage = async () => {
        setGetDadosRelatorioLocal(localStorage.getItem("Lista-de-relatorios"))
        console.log("Retornando os dados do localStorage: ", getDadosRelatorioLocal())
    }

    const clearNextSubmitButton = () => {
        setNewReport({
            empresa: '',
            descricao: '',
            dataInicial: '',
            dataFinal: ''
        })
    }

    useEffect(() => {
        getDataRelatoriosLocalStorage();
    }, []);

    return (
        <div className='flex flex-col md:flex-row justify-center items-center h-screen'>
            {/* div componente da esquerda */}
            <div className='bg-[#191919] rounded-[5px] w-full md:w-[700px] h-auto p-4 m-4'>
                {/* Conteúdo do componente esquerdo */}
            </div>


            {/* div componente da direita */}
            <div className='bg-[#191919] rounded-[5px] w-full md:w-[500px] h-auto p-4 m-4'>
                {/* Label e buttton green */}
                <div className="flex justify-between">
                    <h3 className="text-neutral-200">Relatorios pendentes</h3>
                    <button
                        className="flex align-middle justify-center rounded-lg p-0 bg-primary w-14 h-6"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
                {/* Cards de relatorios pendentes */}
                <div className="flex-col p-3 space-y-3 mt-3">
                    <Cards
                        empresa={"Nome da empresa aqui"}
                        descricao={"Descrição do relatorio"}
                        dataInicial={"01/10/2024"}
                        dataFinal={"01/10/2024"}
                    />
                    {/* Você pode adicionar mais Cards conforme necessário */}
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
                                value={newReport.empresa}
                                onChange={handleInputChange}
                                className="w-full p-2 mb-2 rounded bg-custom-black text-neutral-200"
                                required
                            />
                            <textarea
                                name="descricao"
                                placeholder="Descrição"
                                value={newReport.descricao}
                                onChange={handleInputChange}
                                className="w-full p-2 mb-2 rounded bg-custom-black text-neutral-200"
                                required
                            />
                            <input
                                type="date"
                                name="dataInicial"
                                value={newReport.dataInicial}
                                onChange={handleInputChange}
                                className="w-full p-2 mb-2 rounded bg-custom-black text-neutral-200"
                                required
                            />
                            <input
                                type="date"
                                name="dataFinal"
                                value={newReport.dataFinal}
                                onChange={handleInputChange}
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
