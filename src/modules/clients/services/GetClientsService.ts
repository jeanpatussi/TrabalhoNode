import AppError from "../../../shared/errors/AppErrors";
import Client from "../infra/typeorm/entities/Clients";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class GetClientsService{
    public async execute(): Promise<Client[]>{
        const clientRepository = new ClientRepository();

        const clients = await clientRepository.getAll();

        if(clients.length === 0) throw new AppError("Não existe Clientes Cadastrados.");

        return clients;
    }
}