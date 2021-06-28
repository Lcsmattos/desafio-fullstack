import { User } from '../mock';

export function teste1(numbers: number[]): number[] {
	const duplos: number[] = [];
	const compare: number[] = [];

	for (let i = 0; i < numbers.length; i++) {
		if(!compare.includes(numbers[i])) {
			compare.push(numbers[i]);
		}
		else if (!duplos.includes(numbers[i])) {
			duplos.push(numbers[i]);
		}
	}
	return duplos.sort((a, b) => a - b);
}

export function teste2(users: User[]): User {

	const localizado = users.find(user => user.name.includes('Alvares Cabral'));
	return localizado;
	/*for (let i = 0; i < users.length; i++) {
		if(users[i].name.includes('Alvares Cabral')) {
			const localizado = users[i]
			return localizado
		}
	}*/
} 
