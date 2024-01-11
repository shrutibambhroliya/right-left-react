
import React, { useState } from 'react';
import { Button, Modal, Card, Input } from 'antd';


import './App.css';

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [inputType, setInputType] = useState('');
	const [leftlist, setLeftlist] = useState([]);
	const [rightlist, setRightlist] = useState([]);
	const [thirdlist, setThirdlist] = useState([]);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
		setInputType('');
	};

	const AddValue = () => {
		const objct = {
			name: inputType,
			chkbox: false,
		};
		setLeftlist([...leftlist, objct]);

		setInputType('');
	};




	const leftHandleChange = (e, id) => {
		if (e.target.checked) {
			const leftListFilter = leftlist.filter((ele, index) => index === id);
			leftListFilter[0].chkbox = true;
			leftlist[id] = leftListFilter[0];
			setLeftlist(leftlist);

		} else {
			const leftListFilter = leftlist.filter((ele, index) => index === id);
			leftListFilter[0].chkbox = false;
			leftlist[id] = leftListFilter[0];
			setLeftlist(leftlist);
		}
	}

	console.log("left:::", leftlist)

	const rightHandleChange = (e, id) => {
		if (e.target.checked === false) {

			const rightlistFilter = rightlist.filter((ele, index) => index === id);
			rightlistFilter[0].chkbox = false;
			rightlist[id] = rightlistFilter[0];
			setRightlist(rightlist);
		} else {
			const rightlistFilter = rightlist.filter((ele, index) => index === id);
			rightlistFilter[0].chkbox = true;
			rightlist[id] = rightlistFilter[0];
			setRightlist(rightlist);
		}
	}
	console.log('right::', rightlist)

	const thirdHandleChange = (e, id) => {
		if (e.target.checked === false) {

			const thirdListFilter = thirdlist.filter((ele, index) => index === id);
			thirdListFilter[0].chkbox = false;
			thirdlist[id] = thirdListFilter[0];
			setThirdlist(thirdlist);
		}
		else {
			const thirdListFilter = thirdlist.filter((ele, index) => index === id);
			thirdListFilter[0].chkbox = true;
			thirdlist[id] = thirdListFilter[0];
			setThirdlist(thirdlist);
		}
	}
	console.log('down::', thirdlist)


	const goToFirst = () => {

		setLeftlist([...leftlist, ...rightlist.filter((ele) => ele.chkbox === false)]);
		setRightlist(rightlist.filter((ele) => ele.chkbox === true));

	};

	const goToSecond = () => {
		const selectItems = leftlist.filter((ele) => ele.chkbox === true);
		setRightlist([...rightlist, ...selectItems]);
		const unselectItems = leftlist.filter((ele) => ele.chkbox === false);
		setLeftlist(unselectItems);

	};

	const goToThird = () => {
		const selectItems = leftlist.filter((ele) => ele.chkbox === true);
		setThirdlist([...thirdlist, ...selectItems]);
		const unselectItems = leftlist.filter((ele) => ele.chkbox === false);
		setLeftlist(unselectItems);

	};

	const goThirdto1 = () => {
		setLeftlist([...leftlist, ...thirdlist.filter((ele) => ele.chkbox === false)]);
		setThirdlist(thirdlist.filter((ele) => ele.chkbox === true));
	}

	const goSecndto3 = () => {
		const selectItems = rightlist.filter((ele) => ele.chkbox === true);
		setThirdlist([...thirdlist, ...selectItems]);
		const unselectItems = rightlist.filter((ele) => ele.chkbox === false);
		setRightlist(unselectItems);
	}

	const gothirdto2 = () => {
		setRightlist([...rightlist, ...thirdlist.filter((ele) => ele.chkbox === false)]);
		setThirdlist(thirdlist.filter((ele) => ele.chkbox === true));
	}


	return (
		<div>
			<div style={ { backgroundColor: '#525252', width: '100vw', height: '100vh' } }>
				<center>
					<Button type="primary" onClick={ showModal }>
						Add
					</Button>
				</center>

				<br />
				<Modal
					title="ADD Value"
					open={ isModalOpen }
					onCancel={ handleCancel }
					footer={ [
						<Button key="submit" type="primary" onClick={ AddValue }>
							Add
						</Button>,
						<Button key="back" onClick={ handleCancel }>
							Cancel
						</Button>,
					] }
				>

					<Input placeholder="Basic usage" value={ inputType } onChange={ (e) => setInputType(e.target.value) } />

				</Modal>

				<div className="part-1 ">
					<div className='part'>
						<Card title="Part-A	" bordered={ false } >
							{ leftlist.map((ele, index) => (
								<div key={ index }>
									<label htmlFor="">
										<input type="checkbox"
											onChange={ (e) => leftHandleChange(e, index) } />
										{ ele.name }
									</label>
								</div>
							)) }
						</Card>
					</div>



					<div className='part'>
						<Card title="Part-B" bordered={ false } >
							{ rightlist.map((ele, index) => (
								<div key={ index }>
									<label htmlFor="">
										<input
											type="checkbox"
											defaultChecked
											onChange={ (e) => rightHandleChange(e, index) } />
										{ ele.name }
									</label>
								</div>
							)) }
						</Card>
					</div>



					<div className='part'>
						<Card title="Part-C" bordered={ false } >
							{ thirdlist.map((ele, index) => (
								<div key={ index }>
									<label htmlFor="">
										<input
											type="checkbox"
											defaultChecked
											onChange={ (e) => thirdHandleChange(e, index) } />
										{ ele.name }
									</label>
								</div>
							)) }
						</Card>
					</div>

				</div>

				<br />
				<center>

					<div >
						<div>
							<Button onClick={ goToFirst } type="primary">go To 1</Button>
						</div>
						<br />
						<div>
							<Button onClick={ goToSecond } type="primary">go To 2</Button>
						</div>
						<br />
						<div>
							<Button onClick={ goToThird } type="primary">go To 3</Button>
						</div>
						<br />
						<div>
							<Button onClick={ goThirdto1 } type="primary">go 3 to 1</Button>
						</div>
						<br />
						<div>
							<Button onClick={ goSecndto3 } type="primary">go 2 to 3</Button>
						</div>
						<br />
						<div>
							<Button onClick={ gothirdto2 } type="primary">go 3 to 2</Button>
						</div>
					</div>

				</center>


			</div>



		</div>
	);
};

export default App;









