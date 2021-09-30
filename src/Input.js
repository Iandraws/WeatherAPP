import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import CardContainer from './CardContainer';

export default function Input() {
	const [InputText, setInputText] = useState('');
	const [data, setData] = useState('');
	const [showdata, setshowdata] = useState(false)
	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(data);
		setshowdata(true)
		console.log(showdata)
	};
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				`http://api.openweathermap.org/data/2.5/weather?q=${InputText}&appid=e64017f055c2c4169cf6910ef8abb16c`
			);

			setData(result.data);
		};
		fetchData();
	}, [InputText]);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Box
					sx={{
						width: 500,
						maxWidth: '100%',
						backgroundColor: 'white',
					}}
				>
					<TextField
						value={InputText}
						onChange={(e) => setInputText(e.target.value)}
						fullWidth
						label='Enter City'
						id='fullWidth'
					/>
				</Box>
			</form>
			{showdata?(<CardContainer data={data}/>)
			:(<div>
				Please enter city
			</div>)
			
}


		</div>
	);
}
