// components/Dashboard.js

import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent';
import TurmasTableComponent from './TurmasTableComponent';
import { useRouter } from 'next/router';

const Dashboard = ({ autenticacao, dadosUser }) => {
    const { isAutenticado, autenticar } = autenticacao;
    const { dadosUsuario, setDadosUsuario } = dadosUser;
    const router = useRouter();

    
    const [turmas, setTurmas] = useState([
        { id: 1, numero: '1', nome: 'Turma A' },
        { id: 2, numero: '2', nome: 'Turma B' }
    ]);

   
    const handleExcluirTurma = (id) => {
        
        console.log(`Excluir turma com ID: ${id}`);
       
        setTurmas(turmas.filter(turma => turma.id !== id));
    };

   
    const handleVisualizarTurma = (id) => {
    
        console.log(`Visualizar detalhes da turma com ID: ${id}`);
       
    };

    const handleSair = () => {
        autenticar(false);
        setDadosUsuario({});
        router.push('/login');
    };

    return (
        <div>
            <HeaderComponent nomeProfessor={dadosUsuario.nome} onSair={handleSair} />
            <TurmasTableComponent turmas={turmas} onVisualizar={handleVisualizarTurma} onExcluir={handleExcluirTurma} />
        </div>
    );
};

export default Dashboard;
