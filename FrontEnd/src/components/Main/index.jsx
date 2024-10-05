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
            </div>
        </div>
    )
}

export default Main;