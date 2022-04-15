import fastify from 'fastify';

const app = fastify({
	logger: false
});

export const startServer = () => {
	app.get('/', async (req, reply) => {
		console.info(req.body);
		await reply.type('application/json').code(200).send('Alive');
	});

	app.listen(`${process.env.PORT}`, `${process.env.ADDRESS}`, (err, address) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		console.info(`Web Server started in ${address}`);
	});
};
