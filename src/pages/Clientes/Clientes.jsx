import axios from "axios";
import { Button, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";


export function Clientes(){

    const [ clientes, setClientes ] = useState([]);
    const [ setEnderecos ] = useState();

    useEffect(() => {
        axios.get("http://localhost:3001/clientes").then(response => {
            setClientes(response.data)
            setEnderecos(response.data.endereco)
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div className="clientes">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Clientes</h1>
                    <Button as={Link} to="/clientes/novo"><i className="bi bi-plus-lg me-2"></i>Cliente</Button>
                </div>

                {
                    clientes === null ?
                    <Loader/>
                        :
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                    <th>Cidade</th>
                                    <th>UF</th>
                                    <th>CEP</th>
                                    <th>Rua</th>
                                    <th>Número</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map(cliente => {
                                    return(
                                        <tr key={cliente.id}>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.email}</td>
                                        <td>{cliente.telefone}</td>
                                        <td>{cliente.endereco.cidade}</td>
                                        <td>{cliente.endereco.uf}</td>
                                        <td>{cliente.endereco.cep}</td>
                                        <td>{cliente.endereco.rua}</td>
                                        <td>{cliente.endereco.numero}</td>
                                        <td className="d-flex gap-2">
                                            <Button variant="warning"><i class="bi bi-pencil-fill"></i></Button>
                                            <Button variant="danger"><i class="bi bi-trash-fill"></i></Button>
                                        </td>
                                    </tr>
                                    )                           
                                })}
                            </tbody>
                        </Table>
                }
            </Container>
            
        </div>
    );
}