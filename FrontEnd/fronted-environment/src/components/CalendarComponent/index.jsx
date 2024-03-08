/* eslint-disable react/prop-types */
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { esES } from "@mui/x-date-pickers/locales";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import "./index.css";

const theme = createTheme(
	{
		palette: {
			primary: { main: "#1976d2" },
		},
	},
	esES
);

// eslint-disable-next-line react/prop-types
export function CalendarComponent({user}) {
	const [selectedDate, setSelectedDate] = useState(dayjs());
	const [openPopup, setOpenPopup] = useState(false);

	const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    if (dayjs(newDate).isSame(dayjs(), "day")) {
		setOpenPopup(true)
    }
	console.log(user, 'user')
  };
	return (
		<ThemeProvider theme={theme}>
			<LocalizationProvider
				sx={{ border: "solid 1px red" }}
				dateAdapter={AdapterDayjs}
			>
				<div className='calendarContainer'>
					<div className='calendarTitle'>Calendario</div>
					<DemoContainer components={["StaticDatePicker"]}>
						<DemoItem>
							<StaticDatePicker value={selectedDate}
                onChange={handleDateChange} />
						</DemoItem>
					</DemoContainer>
				</div>
				<Dialog open={openPopup} onClose={() => setOpenPopup(false)}
				PaperProps={{
					sx: {
					backgroundColor: "#E3EEF2",
					borderRadius: "10px",
					boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
					},
				}}>
					<DialogTitle>Recordatorio personal</DialogTitle>
					<DialogContent>
					<p>Reagendar turno con {user.name} {user.lastname}</p>
					</DialogContent>
					<DialogActions>
					<Button sx={{backgroundColor:'#115E86', color: 'white', "&:hover": {
        color: "#115E86",
      },}} onClick={() => setOpenPopup(false)}>Cerrar</Button>
					</DialogActions>
				</Dialog>
			</LocalizationProvider>
		</ThemeProvider>
	);
}
