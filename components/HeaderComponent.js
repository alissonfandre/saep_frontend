import React from 'react';
import { useRouter } from 'next/router';

const HeaderComponent = ({ nomeProfessor, onSair }) => {
    const router = useRouter();

    const handleCadastrarTurma = () => {
     
        router.push('/cadastrarTurma');
    };

    return (
        <div className="container">
            <h2>Bem-vindo, Professor(a) {nomeProfessor}</h2>
            <button className="btn btn-danger float-right mb-3" onClick={onSair}>Sair</button>
            <button className="btn btn-primary mb-3 mr-3" onClick={handleCadastrarTurma}>Cadastrar Turma</button>
        </div>
    );
};

export default HeaderComponent;
