import React from 'react';
import atomize from '@quarkly/atomize';
const Container = atomize.div({
	effects: {
		hover: ':hover'
	}
});

const MyCard = ({
	theme,
	radius,
	children,
	...props
}) => <Container
	{...props}
	m="16px"
	p="24px"
	sm-p="16px"
	md-p="20px"
	bgc={`--${theme === 'light' ? 'light' : 'dark'}`}
	bxsh="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
	hover-bxsh="0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
	trs="all 0.3s ease"
	bdrs={radius}
>
	    
	{children}
	  
</Container>;

export default atomize(MyCard)({
	name: 'MyCard',
	description: {
		en: 'My Awesome Card'
	},
	propInfo: {
		theme: {
			description: {
				en: 'Card Theme'
			},
			control: 'radio-group',
			variants: ['light', 'dark'],
			weight: 1
		},
		radius: {
			description: {
				en: 'Border radius'
			},
			control: 'input',
			weight: 1
		}
	}
}, {
	theme: 'light',
	radius: '0px'
});