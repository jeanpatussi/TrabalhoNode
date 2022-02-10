import IOrderProductDto from "./IOrderProductDto";

export default interface IOrderDto{
    id?: number;
    clienteId: number;
    data: Date; 
    status: string;
    forma_pagamento: string;
    valor_total: number;
    desconto?: number;
    pedido_produtos: IOrderProductDto[]; 
}