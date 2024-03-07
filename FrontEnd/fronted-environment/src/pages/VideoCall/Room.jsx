/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Participant } from "./Participant";

export function Room({ roomName, room, handleLogout }) {
	const [participants, setParticipants] = useState([]);

	useEffect(() => {
		const participantConnected = (participant) => {
			setParticipants((prevParticipants) => [...prevParticipants, participant]);
		};

		const participantDisconnected = (participant) => {
			setParticipants((prevParticipants) =>
				prevParticipants.filter((p) => p !== participant)
			);
		};

		room?.on("participantConnected", participantConnected);
		room?.on("participantDisconnected", participantDisconnected);
		room?.participants.forEach(participantConnected);
		return () => {
			room?.off("participantConnected", participantConnected);
			room?.off("participantDisconnected", participantDisconnected);
		};
	}, [room]);

	const remoteParticipants = participants.map((participant, i) => (
		<Participant key={i} participant={participant} />
	));

	return (
		<div>
			<h2>Room: {roomName}</h2>
			<button onClick={handleLogout}>Log out</button>
			<div>{room && <Participant participant={room.localParticipant} />}</div>
			<h3>Remote Participants</h3>
			<div>{remoteParticipants}</div>
		</div>
	);
}
