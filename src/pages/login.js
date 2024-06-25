import { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
//hihi

const Login = ({ autenticacao, dadosUser }) => {
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    })

    const {isAutenticado, autenticar} = autenticacao;
    const {dadosUsuario, setDadosUsuario} = dadosUser;

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const validarDados = async (e) => {
        e.preventDefault();
        let dados;
        try {
     
            dados = [{email: 'pacoca@gmail.com', senha: 'Pacoca987', concessionarias_id: 1}]
    
            if(dados){
                if(!dados.error){
                    autenticar(true);
                    setDadosUsuario(dados[0]);
                    router.push('/tabela')
                    return;
                } else {
                    dados.error === 'SENHA_ERRADA' ? alert('A senha inserida está errada!') : alert('O email inserido não está cadastrado!')
                    return;
                }
                    
            } else {
                console.error(`Erro ao realizar login`);
            }
        } catch (error) {
            console.error(`Erro ao realizar login`, error);
            return false;
        }
    }

    return (

        <div className="container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            <form style={{ width: '100%', maxWidth: '400px' }} onSubmit={validarDados}>

                <h1>Bem Vindo</h1>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        value={formData.email}
                        name="email" onChange={handleChange} aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" className="form-control"
                        value={formData.senha}
                        name="senha" onChange={handleChange} id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Entrar</button>

            </form>

        </div>
        

    )
}

export default Login;