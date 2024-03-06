const server = require("./src/server");
const { conn } = require("./src/db");
const { Doctor, Pacient } = require("./src/db");
const api = require("./api/doctors.json");
const api2 = require("./api/pacient.json");
const {
	createRandomAppointments,
} = require("./src/utils/createRamdonAppoinments");
const { createRamdonReview } = require("./src/utils/createRamdonReviews");

const PORT = process.env.PORT || 3001;

conn
	.sync({ force: true })
	.then(async () => {
		// Cargar médicos y pacientes en paralelo
		const doctorsPromise = Promise.all(
			api.doctors.map(
				async ({
					name,
					lastname,
					birthdate,
					email,
					password,
					dni,
					cuil,
					adress,
					town,
					province,
					country,
					telephone,
					licensenumber,
					specialty,
					socialSecurity,
					registrationNumber,
					image,
					role,
				}) => {
					await Doctor.findOrCreate({
						where: { name },
						defaults: {
							name,
							lastname,
							birthdate,
							email,
							password,
							dni,
							cuil,
							adress,
							town,
							province,
							country,
							telephone,
							licensenumber,
							specialty,
							socialSecurity,
							registrationNumber,
							image,
							role,
						},
					});
				}
			)
		);

		const patientsPromise = Promise.all(
			api2.pacient.map(
				async ({
					name,
					lastname,
					birthdate,
					email,
					password,
					dni,
					cuil,
					image,
					adress,
					town,
					province,
					country,
					tel,
					socialSecurity,
					planSocialSecurity,
					role,
				}) => {
					await Pacient.findOrCreate({
						where: { name },
						defaults: {
							name,
							lastname,
							birthdate,
							email,
							password,
							dni,
							cuil,
							image,
							adress,
							town,
							province,
							country,
							tel,
							socialSecurity,
							planSocialSecurity,
							role,
						},
					});
				}
			)
		);

		// Esperar la finalización de ambas operaciones
		await Promise.all([doctorsPromise, patientsPromise]);

		// Llamar a la función para crear citas y reviews aleatorias después de cargar médicos y pacientes
		// await createRandomAppointments();
		// await createRamdonReview();

		// Iniciar el servidor
		server.listen(PORT, "0.0.0.0", () => {
			console.log(`Listening on port: ${PORT}`);
		});
	})
	.catch((error) => console.error(error));
