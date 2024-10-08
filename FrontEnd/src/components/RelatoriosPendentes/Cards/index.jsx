const Cards = ({ empresa, descricao, dataInicial, dataFinal, img }) => {
    return (
        <div className="flex align-middle p-2 bg-custom-black w-full rounded-lg">
            {/* <div className=" w-14 h-14 bg-neutral-500 m-4 rounded-full">
                <img className="w-full" src="" alt="" />
            </div> */}
            <div className="flex-col p-3 w-9/12">
                <h1 className="text-neutral-200 font-semibold">{empresa}</h1>
                <p className="text-neutral-500 font-light text-sm">{descricao}</p>
                <div className="flex justify-between">
                    <p className="text-neutral-500 font-light text-sm">{dataInicial}</p>
                    <p className="text-primary font-semibold italic text-sm">{dataFinal}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;

