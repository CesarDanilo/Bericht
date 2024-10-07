const Cards = () => {
    return (
        <div className=" bg-custom-black w-full rounded-lg">
            <div>
                <img src="" alt="" />
            </div>
            <div className="flex-col p-4 ">
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