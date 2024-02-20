import { createTheme, ThemeProvider } from "@mui/material/styles";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { esES } from "@mui/x-date-pickers/locales";
import { CardPacientItem } from "../CardPacientItem/index";
import "./index.css";

const theme = createTheme(
	{
		palette: {
			primary: { main: "#1976d2" },
		},
	},
	esES
);

export function CalendarComponent() {
	return (
		<ThemeProvider theme={theme}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<div className='calendarContainer'>
					<div className='calendarTitle'>Calendario</div>
					<DemoContainer components={["StaticDatePicker"]}>
						<DemoItem>
							<StaticDatePicker defaultValue={dayjs()} />
						</DemoItem>
					</DemoContainer>

					<div className='calendarTitle'>Próximo paciente</div>

					<CardPacientItem />
				</div>
			</LocalizationProvider>
		</ThemeProvider>
	);
}
