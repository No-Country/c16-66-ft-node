import { Card, Button } from "@mui/material/";

function App() {
	return (
		<>
			<Card sx={{ display: "flex", gap: "4%" }}>
				<h1 className=' text-primaryGreen bg-darkBlue font-bold'>No Country Frontend App</h1>
				<Button sx={{ width: "20%" }} variant='outlined'>
					Comprobando instalaciones
				</Button>
			</Card>
		</>
	);
}

export default App;
