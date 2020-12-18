import styled from 'styled-components'

export const Bar = styled.div`
	width: 100%;
	height: 100px;
	
	box-shadow: 0 2px 8px -2px gray;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;

	position: relative;
	z-index: 1;
`