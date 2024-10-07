const Main = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center h-screen'>
            {/* div componente da esquerda */}
            <div className='bg-[#191919] rounded-[5px] w-full md:w-[700px] h-auto p-4 m-4'>
                {/* Conteúdo do componente esquerdo */}
            </div>
            {/* div componente da direita */}
            <div className='bg-[#191919] rounded-[5px] w-full md:w-[500px] h-auto p-4 m-4'>
                {/* Conteúdo do componente direito */}
                <div className="flex justify-between">
                    <h3 className="text-neutral-200">Relatorios pendentes</h3>
                    <button className=" flex align-middle  justify-center rounded-lg p-0 bg-primary w-16 h-6 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main;