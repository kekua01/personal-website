import React from "react"
import Header from "../components/header"
import Heading from "../components/heading"
import Nav from "../components/nav"
import Footer from "../components/footer"
import styles from "../static/about.module.css"
import headshot from "../static/headshot.png"

var boxOpen = false
var b1 = false
var b2 = false
var b3 = false

class About extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      box: 'none',
      box1: 'none',
      box2: 'none',
      box3: 'none'
    };
  }

    handleClick(open) {

    	if (open == 'one') {
    		if (boxOpen) {
		    	boxOpen = false
		    	this.setState(({ box }) => ({
		      	box:  'none'
		    	}));
	    	}
	    else {
	    	boxOpen = true
	    	this.setState(({ box }) => ({
	      	box:  'block'
	    	}));
	    	}
    	}

    	else if (open == 'two') {
    		if (b1) {
		    	b1 = false
		    	this.setState(({ box1 }) => ({
		      	box1:  'none'
		    	}));
	    	}
		    else {
		    	b1 = true
		    	this.setState(({ box1 }) => ({
		      	box1:  'block'
		    	}));
		    	}
    	}
    	else if (open == 'three') {
    		if (b2) {
		    	b2 = false
		    	this.setState(({ box2 }) => ({
		      	box2:  'none'
		    	}));
	    	}
		    else {
		    	b2 = true
		    	this.setState(({ box2 }) => ({
		      	box2:  'block'
		    	}));
		    	}
    	}
    	else if (open == 'four') {
	    		if (b3) {
			    	b3 = false
			    	this.setState(({ box3 }) => ({
			      	box3:  'none'
			    	}));
		    	}
		    else {
		    	b3 = true
		    	this.setState(({ box3 }) => ({
		      	box3:  'block'
		    	}));
		    	}
	    	}
  }

render() {
	return (
  	<div>
	    <Header>
	  		<Heading title='About Me' href='/' linkText='Home' />
	  		<Nav />
	  	</Header>
	  	<div className={styles.aboutme}>
	  			<img className={styles.pic} src={headshot} alt="" />
	  			<p className={styles.descript}>
	  				&emsp; Hello! My name is Coby. I'm a current sophomore in college majoring
	  				in <b>Computer Science</b>,
	  				and I'm planning to get a language citation 
	  				in <b>Chinese</b>. <br></br>
	  				&emsp; I see myself as a problem solver and riddle-lover, and I enjoy writing code because it's often no different
	  				than cracking a puzzle. 
	  				I'm not sure what I want to do with my career, but the world has lots of problems to solve and I hope I'll be working on one of them. I can see myself doing
	  				research, or maybe helping humanity to colonize Mars. Perhaps I'll actually be an astronaut, or an Olympic table tennis player, or a firefighter. Maybe even a jedi. Who's to say?
	  				<br></br><br></br>
	  				 <span className={styles.hbrag} onClick={() => this.handleClick('one')}>Click here for more.
	  				 </span>
	  				<div style={{ display: this.state.box }} className={styles.bragContent}><span>
	  					I think of myself as a down-to-earth, easy going guy. I'm an optimist who thinks
	  					the world will continue to improve, and though it's a cliche, I do try to believe everything
	  					happens for a reason. My college interviewer described me as a 
	  					"bright and soulful young man...[he] has a quiet charisma and cool." Sweet.
	  				</span></div>
	  			</p>
	  	</div>
	  	<div className={styles.aboutmemore}>
	  		<div className={styles.subpart}>
	  			<h3 className={styles.subtitle} onClick={() => this.handleClick('two')}>On campus</h3>
	  			<ul className={styles.list} style={{ display: this.state.box1 }}>
	  				<li className={styles.listitem}>I'm a member of our newspaper, the Harvard Crimson (the tech department). I'm also a part of the Harvard Computer Society. </li>
	  				<li className={styles.listitem}>I play volleyball on the club team. Practices are usually the highlights of my week!</li>
	  				<li className={styles.listitem}>I'm involved with the Harvard Effective Altruism (EA) club, and was a part of an EA fellowship my Freshman Fall.</li>
	  			</ul>
	  		</div>
	  		<div className={styles.subpart}>
	  			<h3 className={styles.subtitle} onClick={() => this.handleClick('three')}>Free time</h3>
	  			<ul className={styles.list} style={{ display: this.state.box2 }}>
	  				<li className={styles.listitem}>Outside of coding, I love playing board games like Catan, chess, and Secret Hitler.</li>
	  				<li className={styles.listitem}>I also play a ton of different sports – basketball, tennis, and surfing are my favorite to play casually. You don't really "play" surfing but it's cool. </li>
	  				<li className={styles.listitem}>My other skills include guitar (intermediate) and Mario Kart (expert).</li>
	  			</ul>
	  		</div>
	  		<div className={styles.subpart}>
	  			<h3 className={styles.subtitle} onClick={() => this.handleClick('four')}>Random stuff</h3>
	  			<ul className={styles.list} style={{ display: this.state.box3 }}>
	  				<li className={styles.listitem}>Favorite book: Sapiens.</li>
	  				<li className={styles.listitem}>Typing speed: ~100wpm.</li>
	  				<li className={styles.listitem}>I tape my mouth shut at night to breath through my nose.</li>
	  				<li className={styles.listitem}>I love butter coffee.</li>
	  				<li className={styles.listitem}>I consume a lot of Tim content (<a target="_blank" href="https://tim.blog/">Tim Ferriss</a> and <a target="_blank" href="https://waitbutwhy.com/">Tim Urban</a>).</li>
	  			</ul>
	  		</div>
	  	</div>
	  	<Footer></Footer>
	</div>


  );
}
}

export default About
