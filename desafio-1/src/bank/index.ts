import { User } from '../mock';


export function teste1(users: User[], user_id: string): number {
	const cliente = users.find(cliente => user_id === cliente.id); // Busco dentro do array de Usuários qual é o id correspondente ao cliente e id informado.
	const extrato = cliente.balance // separo apenas o valor do saldo do cliente encontrado
	return extrato //Envio do valor do saldo do cliente encontrado
}

export function teste2(users: User[], info: ITest2): Test2Respose {
	const cliente = users.find(cliente => info.user_id === cliente.id); // Busco dentro do array de Usuários qual é o id correspondente ao cliente e id informado.
	const extrato = cliente.balance // separo apenas o valor do saldo do cliente encontrado
	if (extrato < info.amount && info.password == cliente.password) {
		return { 
			success: false,
			message: 'Saldo insuficiente'
		}
	}
	else if (extrato >= info.amount && info.password != cliente.password) {
		return { 
			success: false,
			message: 'Senha incorreta'
		}
	}
  else if (extrato >= info.amount && info.password == cliente.password) { // condiciono a ação apenas se Valor do extrato do cliente for menor que o valor da transação e se senha informada e cadastrada estão corretas
		const novoSaldo = extrato - info.amount // subtraio o valor solicitado do valor da conta do cliente
		return {
			success: true,
			message: `O saque foi realizado em sua conta com Sucesso, seu saldo agora é de ${novoSaldo}`
		}
	} 
}


type ITest2 = {
  password?: string;
  amount?: number;
  user_id: string;
};

type Test2Respose = {
  success: boolean;
  message?: string;
};

