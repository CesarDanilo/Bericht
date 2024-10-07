const Cards = () => {
    return (
        <div className="flex align-middle p-2 bg-custom-black w-full rounded-lg">
            <div className=" w-14 h-14 bg-white m-4 rounded-full">
                <img className="w-full" src="" alt="" />
            </div>
            <div className="flex-col p-3 w-9/12">
                <h1 className="text-neutral-200 font-semibold">Nome da empresa aqui</h1>
                <p className="text-neutral-500 font-light text-sm">Descrição do relatorio</p>
                <div className="flex justify-between">
                    <p className="text-neutral-500 font-light text-sm">01/10/2024</p>
                    <p className="text-primary font-semibold italic text-sm">01/10/2024</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;