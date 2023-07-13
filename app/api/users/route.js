export async function GET (request){
    const questions = [
		{
			questionText: 'What was the first sport played on the moon?',
			answerOptions: [
				{ answerText: 'Frisbee', isCorrect: false },
				{ answerText: 'Soccer', isCorrect: false },
				{ answerText: 'Golf', isCorrect: true },
				{ answerText: 'Bocce ball', isCorrect: false },
			],
		},
		{
			questionText: 'Where did the powers of Spiderman come from?',
			answerOptions: [
				{ answerText: 'He was born with them', isCorrect: false },
				{ answerText: 'He was bitten by a radioactive spider', isCorrect: true },
				{ answerText: 'He went through a scientific experiment', isCorrect: false },
				{ answerText: 'He woke up with them after a dream', isCorrect: false },
			],
		},
		{
			questionText: 'Which company is known for publishing the Mario video game?',
			answerOptions: [
				{ answerText: 'Xbox', isCorrect: false },
				{ answerText: 'Nintendo', isCorrect: true },
				{ answerText: 'SEGA', isCorrect: false },
				{ answerText: 'Electronic Arts', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Which sea creature has three hearts?',
			answerOptions: [
				{ answerText: 'Shark', isCorrect: false },
				{ answerText: 'Jellyfish', isCorrect: false },
				{ answerText: 'Stingray', isCorrect: false },
				{ answerText: 'Octopus', isCorrect: true },
			],
		},
		{
			questionText: 'Where did the croissant originate?',
			answerOptions: [
				{ answerText: 'France', isCorrect: false },
				{ answerText: 'Austria', isCorrect: true },
				{ answerText: 'Turkey', isCorrect: false },
				{ answerText: 'Tokyo', isCorrect: false },
			],
		},
	];
    return new Response(JSON.stringify(questions))
}