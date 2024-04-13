import classes from './App.module.css'
import { useState, useEffect } from 'react'
export default function App() {
	const [width, SetWidth] = useState()
	const [length, SetLength] = useState()
	const [thickness, SetThickness] = useState()
	const [cubic, SetCubic] = useState()
	const [squareMeter, SetSquareMeter] = useState()
	const [pricePerCubic, SetPricePerCubic] = useState()
	const [pricePerSquareMeter, SetPricePerSquareMeter] = useState()
	// Динамика длина
	const handleWidthChange = event => {
		const value = parseFloat(event.target.value)
		SetWidth(value)
	}
	// Динамика Ширина
	const handleLengthChange = event => {
		const value = parseFloat(event.target.value)
		SetLength(value)
	}
	// Динамика толщина
	const handleThicknessChange = event => {
		const value = parseFloat(event.target.value)
		SetThickness(value)
	}
	// Динамика кол-во кубов
	const handleCubicChange = event => {
		const value = parseFloat(event.target.value)
		if (!isNaN(value) && width && length && thickness) {
			SetCubic(value)
			const newSquareMeter = calculateSquareMeterDynamic(
				value,
				width,
				length,
				thickness
			)
			SetSquareMeter(newSquareMeter)
		}
	}

	// Эффект, который вызывается при изменении количества кубов
	useEffect(() => {
		if (cubic !== '' && width && length && thickness) {
			const newSquareMeter = calculateSquareMeterDynamic(
				cubic,
				width,
				length,
				thickness
			)
			SetSquareMeter(newSquareMeter)
		}
	}, [cubic, width, length, thickness])

	// Динамика кол-во квадратов
	const handleSquareMeterChange = event => {
		const value = parseFloat(event.target.value)
		SetSquareMeter(value)
	}
	// Динамика цена за куб
	const handlePricePerCubicChange = event => {
		const value = parseFloat(event.target.value)
		SetPricePerCubic(value)
	}
	// Динамика цена за квадрат
	const handlePricePerSquareMeterChange = event => {
		const value = parseFloat(event.target.value)
		SetPricePerSquareMeter(value)
	}

	// Очистка полей
	const handleClear = () => {
		SetWidth('')
		SetLength('')
		SetThickness('')
		SetCubic('')
		SetSquareMeter('')
		SetPricePerCubic('')
		SetPricePerSquareMeter('')
	}

	// Функции для вычисления зависимых значений
	function calculateSquareMeterDynamic(cubic, width, length, thickness) {
		const sumSquareMeter =
			(cubic / ((width * length * thickness) / 1_000_000)) *
			((width * length) / 1_000)
		return sumSquareMeter.toFixed(3)
	}

	return (
		<>
			<div className={classes.containerGlobal}>
				<div className={classes.containerCalculate}>
					<h1>Универсальный калькулятор</h1>
					<input
						type='number'
						name=''
						id='width'
						className={classes.inputCalculate}
						placeholder='Введите вашу длину в метрах'
						onChange={handleWidthChange}
						value={width}
					/>
					<p>{`Длина: ${width || width === 0 ? `${width} м` : '0 м'}`}</p>

					<input
						type='number'
						name=''
						id=''
						className={classes.inputCalculate}
						placeholder='Введите ширину в мм'
						onChange={handleLengthChange}
						value={length}
					/>
					<p>{`Ширина: ${length || length === 0 ? `${length} мм` : '0 мм'}`}</p>
					<input
						type='number'
						name=''
						id=''
						className={classes.inputCalculate}
						placeholder='Введите толщину в мм'
						onChange={handleThicknessChange}
						value={thickness}
					/>
					<p>{`Толщина: ${
						thickness || thickness === 0 ? `${thickness} мм` : '0 мм'
					}`}</p>
					<input
						type='number'
						name=''
						id=''
						className={classes.inputCalculate}
						placeholder='Введите кол-во кубов (м3)'
						onChange={handleCubicChange}
						value={cubic}
					/>
					<p>{`Кол-во кубов: ${
						cubic || cubic === 0 ? `${cubic} м3` : '0 м3'
					}`}</p>
					<input
						type='number'
						name=''
						id=''
						className={classes.inputCalculate}
						placeholder='Введите кол-во квадратных метров (м2)'
						onChange={handleSquareMeterChange}
						value={squareMeter}
					/>
					<p>{`Кол-во квадратных метров: ${
						squareMeter || squareMeter === 0 ? `${squareMeter} м2` : '0 м2'
					}`}</p>
					<input
						type='number'
						name=''
						id=''
						className={classes.inputCalculate}
						placeholder='Введите цену за куб'
						onChange={handlePricePerCubicChange}
						value={pricePerCubic}
					/>
					<p>{`Цена за куб: ${
						pricePerCubic || pricePerCubic === 0
							? `${pricePerCubic} руб.`
							: '0 руб.'
					}`}</p>
					<input
						type='number'
						name=''
						id=''
						className={classes.inputCalculate}
						placeholder='Введите цену за квадратный метр'
						onChange={handlePricePerSquareMeterChange}
						value={pricePerSquareMeter}
					/>
					<p>{`Цена за квадратный метр: ${
						pricePerSquareMeter || pricePerSquareMeter === 0
							? `${pricePerSquareMeter} руб.`
							: '0 руб.'
					}`}</p>
				</div>
				<button onClick={handleClear}>Очистить все поля</button>
			</div>
		</>
	)
}
