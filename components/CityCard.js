import { useState } from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import { render } from 'react-dom';


const CityCard = (props) => {
	return (
		<>
			<Card sx={{ minWidth: 400 }}>
				<CardContent>
					<Typography variant="h5" color="text.primary" gutterBottom>
						CITY: {props.cityName}
					</Typography>
					<Typography sx={{ fontSize: 18 }} component="div">
						TEMP: {props.temp}
					</Typography>
					<Typography sx={{ fontSize: 18 }}>
						SIGO:
					</Typography>
					<Typography variant="body2" color="text.secondary">
					</Typography>
				</CardContent>
			</Card>
		</>
	);

}

export default CityCard;