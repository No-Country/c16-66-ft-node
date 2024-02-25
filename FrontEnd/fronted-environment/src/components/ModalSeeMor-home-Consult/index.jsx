/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Modal, Button, Box } from "@mui/material";
import { MedicConsult } from "../MedicCosult";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};
export function SeeMoreModalConsult(props) {
	const user = props.selectTypeUser;

	return (
		<>
			<section className='absolute top-2/4 left-1/2 transition-transform -translate-x-2/4 -translate-y-2/4 w-96 bg-lightBlue'>
				<MedicConsult user={user} />
			</section>
		</>
	);
}
