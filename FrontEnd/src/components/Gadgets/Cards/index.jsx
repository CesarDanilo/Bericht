import React from "react";

const CardsGadgets = ({ descricao, valor }) => {
    return (
        <div className="flex-lg  bg-[#191919] rounded-lg w-full md:w-[50%] p-6 shadow-md justify-center align-middle">
            {/* Conteúdo dentro do componente esquerdo */}
            <h1 className="text-lg font-semibold text-white">{descricao}</h1>
            <h3 className="text-5xl text-primary">
                {valor}
            </h3>
        </div>
    )
}

export default CardsGadgets;