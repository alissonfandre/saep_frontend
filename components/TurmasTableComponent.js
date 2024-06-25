import React from 'react';

const TurmasTableComponent = ({ turmas, onVisualizar, onExcluir }) => {
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Número da Turma</th>
                        <th scope="col">Nome da Turma</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {turmas.map(turma => (
                        <tr key={turma.id}>
                            <td>{turma.numero}</td>
                            <td>{turma.nome}</td>
                            <td>
                                <button className="btn btn-info btn-sm" onClick={() => onVisualizar(turma.id)}>Visualizar</button>
                                <button className="btn btn-danger btn-sm" onClick={() => onExcluir(turma.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TurmasTableComponent;
