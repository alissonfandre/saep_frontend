const enviarDados = async (o) => {
    if (!o.route) {
        console.error(`Requisição de submit feita sem uma rota!`);
        return;
    }

    if (!o.dados) {
        console.error(`Requisição de submit feita sem dados!`);
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/${o.route}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(o.dados),
        });

        if (response.ok) {
            if(o.registroSucesso) o.registroSucesso(true);
            return true;
        } else {
            console.error(`Erro ao registrar ${o.route}`);
            return false;
        }
    } catch (error) {
        console.error(`Erro ao registrar ${o.route}`, error);
        return false;
    }
};



const apagarDados = async (o) => {
    if (!o.route) {
        console.error(`Requisição de delete feita sem uma rota!`);
        return;
    }

    if (!o.item) {
        console.error(`Requisição de delete feita sem um item!`);
        return;
    }

    try {
        const response = await fetch(`/api/${o.route}/delete?id=${o.item._id}`, {
            method: 'DELETE',
        });

        const data = await response.json();
        if (o.fetchDados) o.fetchDados();
        return true;
    } catch (error) {
        console.error(`Erro ao excluir ${o.route}`, error);
        return false;
    }
};



const buscarDados = async (route) => {
    if (!route) {
        console.error(`Requisição de fetch feita sem rota!`);
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/${route}`, {
            method: 'GET',
        });

        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            console.error(`Erro ao buscar por dados de ${route}`);
        }
    } catch (error) {
        console.error(`Erro ao buscar por dados de ${route}`, error);
    }
};



const atualizarDados = async (o) => {
    if (!o.item) {
        console.error(`Requisição de update feita sem um item!`);
        return;
    }

    if (!o.route) {
        console.error(`Requisição de update feita sem uma rota!`);
        return;
    }

    if (!o.dados) {
        console.error(`Requisição de update feita sem dados!`);
        return;
    }

    try {
        const response = await fetch(`/api/${o.route}/update?id=${String(o.item._id)}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(o.dados),
        });

        if (response.status === 200) {
            return;
        } else {
            console.error(`Erro ao atualizar ${o.route}`);
        }
    } catch (error) {
        console.error(`Erro ao atualizar ${o.route}, ${error}`);
    }
};

export { enviarDados, apagarDados, buscarDados, atualizarDados };