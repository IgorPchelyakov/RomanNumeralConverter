const convertBtn = document.getElementById('convert-btn')
const numberField = document.getElementById('number')
const output = document.getElementById('output')

convertBtn.addEventListener('click', () => {
	if (numberField.value === '') {
		output.innerText = 'Please enter a valid number'
		return
	}
	if (isNaN(numberField.value)) {
		output.innerText = 'Please enter a valid number'
		return
	}
	if (numberField.value < 0) {
		output.innerText = 'Please enter a number greater than or equal to 1'
		return
	}
	if (numberField.value > 3999) {
		output.innerText = 'Please enter a number less than or equal to 3999'
		return
	}
	output.innerText = convertToRoman(numberField.value)
})

const convertToRoman = num => {
	if (num === 0) return ''
	const romanNumerals = [
		{ value: 1000, numeral: 'M' },
		{ value: 900, numeral: 'CM' },
		{ value: 500, numeral: 'D' },
		{ value: 400, numeral: 'CD' },
		{ value: 100, numeral: 'C' },
		{ value: 90, numeral: 'XC' },
		{ value: 50, numeral: 'L' },
		{ value: 40, numeral: 'XL' },
		{ value: 10, numeral: 'X' },
		{ value: 9, numeral: 'IX' },
		{ value: 5, numeral: 'V' },
		{ value: 4, numeral: 'IV' },
		{ value: 1, numeral: 'I' },
	]
	for (let i = 0; i < romanNumerals.length; i++) {
		if (num >= romanNumerals[i].value) {
			return (
				romanNumerals[i].numeral + convertToRoman(num - romanNumerals[i].value)
			)
		}
	}
}
