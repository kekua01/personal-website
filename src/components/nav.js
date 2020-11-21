import React, { Component } from "react"
import styles from "../static/nav.module.css"
import { Link } from "gatsby"
import Hamburger from 'react-hamburger-menu';

class Nav extends Component {
	constructor(){
		super()
		this.state = {
			open: false,
			color: 'black'
		}
	}

	handleClick = () => {
		this.setState({open: !this.state.open});
		this.setState({color: this.state.open ? 'black' : 'white'});
	}

	displayHamburger = () => {
		return (
			<Hamburger
				isOpen={this.state.open}
				menuClicked={this.handleClick.bind(this)}
				width={16}
				height={10}
				strokeWidth={2}
				rotate={0}
				color={this.state.color}
				borderRadius={0}
				animationDuration={.5}
				className={styles.burger}
			/>
		)
	}

	displayPatty = () => {
		const navstyle = {
			backgroundColor: "black",
	    	width: this.state.open ? "240px" : "0",
	    	color: this.state.open ? "white" : "black"
    	};

    	const hidestyle = {
    		display: this.state.open ? "block" : "none"
    	};

		return (
		<div className= {styles.container} style={navstyle}>
			<div className={styles.links} style={hidestyle}>
				<p className={styles.item}><Link to='/' >Home</Link></p>
				<p className={styles.item}><Link to='/about' >About me</Link></p>
				<p className={styles.item}><Link to='/blog' >Blog</Link></p>
					<ul className={styles.list}>
						<li className={styles.subItem}><Link to='/agreeable' >Agreeableness</Link></li>
						<li className={styles.subItem}><Link to='/luck'>Kids and Luck</Link></li>
						<li className={styles.subItem}><Link to='/lateness'>My Lateness</Link></li>
					</ul>
				<p className={styles.item}><Link to='/podcast' >Podcast</Link></p>
				<p className={styles.item}><Link to='/coding' >Coding</Link></p>
				
			</div>
		</div>
		)
	}

	render() {
		const burgstyle = {
    		position: this.state.open ? "fixed" : "absolute"
    	};

		return (
			<div className={styles.menu} style={burgstyle}>
				{ this.displayHamburger() }
				{ this.displayPatty() }
			</div>
		);
	}
}

export default Nav;

