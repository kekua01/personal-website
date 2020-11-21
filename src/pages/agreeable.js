import React from "react"
import styles from "../static/bloghead.module.css"
import Header from "../components/header"
import Heading from "../components/heading"
import Nav from "../components/nav"
import { Link } from "gatsby"



export default function PostOne() {

  return (
    <div>
        <Header>
            <Heading title='Blog' href='/' linkText='Home' />
            <Nav />
        </Header>
    <div className={styles.page}>
    	<Link to="/blog" className={styles.back}>Back to blog</Link>
    	<h1 className={styles.title}>The Sweet Spot of Agreeableness</h1>
    	<p className={styles.post}>
    		It’s important to find a good degree of agreeableness. It’s a broad spectrum – on one 
    		end there are people who constantly do things they don’t really want to in order to appease
    		others. In contrast to this are the completely disagreeable folk, who probably are very 
    		efficient, but who everyone knows is an asshole.

    		<br></br><br></br>

    		There are lots situations when ones agreeableness comes into play. One example is borrowing things,
    		especially sharing bites of food. People either are fine sharing a bite of their food (the "yeses"),
    		or not fine (the "nos"). This leads to three types of exchanges:

    		<br></br><br></br>

    		1) Two yeses – can I have a bite? Of course! What do you think?? Amazing! Can I have a bit of yours? Of courseeeEE!!! 
  			Wow yours is soo good too!! ...what a great time these people are having – why don’t they just
  			stick their fingers down each other’s throats? (just kidding...I definitely want to be food sharer, but I'm not. I'm working on it).
  			<br></br>
			2)	Two no people. A quiet polite meal where no one exchanges spit.
			<br></br>
			3)	A yes person asking for a no person’s sandwich. I in this scenario just grit my teeth and offer up the bite because I’m not an a-hole. And I think I need to get over not wanting to share a bite. But it still annoys me even if I recognize that I need to change. And I still would never ask someone for a bite of their sandwich. 

			<br></br><br></br>

			Here is another scenario:
			Asking people for help. I tend towards not asking very often and figuring things out on my own.
			 But if someone else can solve your problem a lot faster than you, I think you should just
			  ask them. Now, they can definitely refuse, but that would make them a dick if this thing is 
			  not very big of a task. They can accept and feel annoyed that they have to help because if 
			  they don’t help they’re a dick (or sometimes you’re just worried that they’re feeling annoyed)
			   but in all cases, this person is the lame one, not you for asking for help. I used to be 
			   terrible at this and still kind of am. For instance, I would refrain from going to office hours
			    because I knew I could (probably) figure it out on my own, eventually. I didn’t want to bother 
			    the teaching fellows or make everyone else their have to wait longer in line. To be clear, this 
			    is not a selfless act. I just assumed (totally incorrectly) that people would be annoyed that 
			    I had my own questions to ask, and I want people to like me of course. I’m obsessing over not
			    inconveniencing anyone. Again, probably no one would be annoyed, and if they were, that’s their
			     problem. I’m so clearly wrong, but a small part of me still, I think, would feel bad going to
			      office hours, like I’m being a nuisance. If I actually needed help, I would of course go. 
			      The problem is more so should I go to save time on an assignment or just do it on my own without bothering anyone.
    		
    		<br></br><br></br>

    		Another debate – sending food back. It definitely depends on how the meal was messed up, 
    		but like if they put onions in your omelet and you didn’t want onions, should you send
    		 it back? You totally have a right to, but I consider that a little on the a-hole side. 
    		 Just pick out the onions (you should like onions in the first place; what, are you ten?).
    		  But some people would totally disagree – it’s on the restaurant to get your meal right.
    		   But let’s say your meal comes out cold. I would probably just eat it because I’m too 
    		   agreeable and want to avoid confrontation and annoying the waiter and / or chef 
    		   (but again, I’m probably wrongly assuming they’d be annoyed). Here is where I think 
    		   I want to be more disagreeable. 

    		  <br></br><br></br>

    		Some situations to be agreeable in: you run into someone you don’t really like on the 
    		street / shopping whatever. You probably don’t want to talk to them and really just 
    		want to give them a nice jab to the throat, but instead of telling them this you 
    		(hopefully) recognize their dignity as a human and sacrifice a few minutes of your 
    		time to engage in small talk with them. 
			Wearing a mask is also a good example. Let’s assume that wearing masks does not, 
			in fact, really help contain COVID and it annoys you to wear one. You still gotta wear 
			it, chump. Stores mandate it. Just put the damn thing on and don’t be a Karen or Ken. 

    	</p>
    </div>
    </div>
  )
 }