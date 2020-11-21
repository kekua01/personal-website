import React from "react"
import Header from "../components/header"
import Heading from "../components/heading"
import Nav from "../components/nav"
import styles from "../static/coding.module.css"
import Codeblock from "../components/codeblock"
import chess from "../static/chess.png"
import hex from "../static/hex.png"
import c4 from "../static/c4.png"
import path from "../static/path.png"
import phys from "../static/physics.png"
import phys2 from "../static/phys2.png"
import phys3 from "../static/phys3.png"
import phys4 from "../static/phys4.png"
import phys5 from "../static/phys5.png"



export default function Coding() {

  return (
    <div>
    	<Header>
    		<Heading title='Coding' href='/' linkText='Home' />
    		<Nav />
  		</Header>
  		<div className={styles.content}>
	  		<h3 className={styles.categor}>Python</h3>
	  		<p className={styles.descriptor}>To see more tidbits of code, visit my Github profile <a target="_blank" href="https://github.com/kekua01">here</a>. Below are a few I like:</p>
	  		<div className={styles.row}>
	  				<Codeblock title="Magic Hexagon" img={hex} link="https://github.com/kekua01"
	  						text="This code isn't my best work, but it gives you the answer to the magic hexagon. I had a wooden puzzle that I'd been trying to solve for months. I resolved not to look up the answer so wrote this code instead."></Codeblock>
	  				<Codeblock title="Connect 4" img={c4} 
	  						text="Using Reinforcement Learning, I created an Agent that can be trained in Connect4. It competes against an 
	  						opponent that's about as good as your nine-year-old cousin: it makes winning moves if it can, and blocks the Agent from winning if applicable.
	  						Since there are so many combinations of Connect4 games, you have to set the number of training games pretty high for it to start winning. And this will take a while...so improving this code is definitely a future project."></Codeblock>
	  		</div>
	  		<div className={styles.row}>
	  				<Codeblock title="Knight Moves" img={chess} 
	  						text="Given inputs x and y representing two positions on a chess board (0-63), this code will output the (least) number of moves
	  						it would take a knight to travel from position x to y. This problem was on foobar (still waiting to hear back from you, Google...)"></Codeblock>
	  				<Codeblock title="Shortest Path" img={path} 
	  						text="Another foobar problem, and a classic. Given a matrix of 1's and 0's, this code will output the length of the shortest path from
	  						the top left of the matrix to the bottom right. 0's represent open space, and 1's represent walls; BUT, you are allowed to knock down one wall in your quest to find the shortest path. Intriguing, isn't it."></Codeblock>
	  		</div>
	  		<div className={styles.row}>
	  		</div>
	  		<h3 className={styles.categor}>Vpython</h3>
	  		<p className={styles.descriptor}>For each physics unit in high school, we had to solve a problem based on what
	  			we'd just learned. I wrote a program in Vpython for each unit that would simulate the scenario. Press its play arrow to run a program!</p>
			
			<div className={styles.row}>
	  				<Codeblock title="Projectile Motion" img={phys} 
	  						text="The scenario is thus: a drone flying straight up carries a water balloon over a field. There is a cannon on the other side of the field. 
	  						You must input the distance between drone and cannon, the angle at which the cannon fires, and the time after takeoff before the drone releases
	  						the balloon. The simulation will tell you at what time to fire the cannon to hit the balloon."></Codeblock>
	  				<Codeblock title="Spring Ramp" img={phys2} 
	  						text="A block sits on a ramp with a spring at the bottom – you input the ramp's angle. You can adjust 
	  						the block's mass, the spring constant, and the static and kinetic coefficients of friction, and see how
	  						long it takes the block to stop moving."></Codeblock>
	  		</div>
	  		<div className={styles.row2}>
	  			<iframe src="https://trinket.io/embed/glowscript/c66c903496" width="40%" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
	  			<iframe src="https://trinket.io/embed/glowscript/4ffbd769ee" width="40%" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
	  		</div>
	  		<div className={styles.row}>
	  				<Codeblock title="Slingshot" img={phys3} 
	  						text="By far my favorite one here. It reenacts a classic movie scene: the hero dives to save a friend from falling to their death.
	  						Fortunately, the friend has a parachute. Unfortunately, you have to fire the slingshot."></Codeblock>
	  				<Codeblock title="Blocks on Ramp" img={phys4} 
	  						text="Block A sits attatched to a spring, and it slides down a ramp, hitting block B (which has a stopper attatched). Both blocks end up as close to the end of the ramp as possible, no matter the inital configuration. You can adjust all the parameters."></Codeblock>
	  		</div>
	  		<div className={styles.row2}>
	  			<iframe src="https://trinket.io/embed/glowscript/eeea573b3e" width="40%" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
	  			<iframe src="https://trinket.io/embed/glowscript/a0deb75cbe" width="40%" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
	  		</div>

	  		<div className={styles.row}>
	  				<Codeblock title="Batman" img={phys5} 
	  						text="Batman fires a grappling hook and swings on it. You can adjust the variables to try to get him to swing farther, but be careful not to exceed the tensile strength
	  						of the rope."></Codeblock>
	  		</div>
	  		<div className={styles.row2}>
				<iframe src="https://trinket.io/embed/glowscript/197f8f2ba1" width="40%" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
			</div>
		</div>	  	 
      
    </div>
  )
}