import React from "react"
import Header from "../components/header"
import Heading from "../components/heading"
import Nav from "../components/nav"
import Welcome from "../components/welcome"
import BoxContainer from "../components/boxcontainer"
import Box from "../components/clickbox"
import revojam from "../static/revojam.png"
import python from "../static/python.png"
import podcast from "../static/palchemy.png"
import blog from "../static/blog.png"
import bulb from "../static/bulb.png"
import Footer from "../components/footer"
import { Link } from "gatsby"


export default function Home() {
  return (
  	<React.Fragment>
	  	<Header>
	  		<Heading title='Coby Sheehan' href='/about/' linkText='About me' />
	  		<Nav />
	  	</Header>
	  	<Welcome />
	  	<BoxContainer>
	  	<Link to='/coding'>
	  		<Box text='Code stuff' img={python} 
	  			 description="View some programs I've written in python and Vpython that do cool stuff. There's some cool physics simulations in here." 
	  		/>
	  	</Link>
	  	<a target='_blank' href="https://www.revojam.com/about">
	  		<Box text='Revojam' img={revojam} 
	  			 description="Revojam is a webapp a friend and I are working on. Using Spotify, it lets you join a live room with friends where everyone can add songs to the group queue." 
	  		/>
	  	</a>
	  	<Link to='/podcast'>
	  		<Box text='Podcast' img={podcast} 
	  			 description="This podcast was my Senior project in high school. I'm pretty introverted, so I did something that would really get me out of my comfort zone." 
	  		/>
	  	</Link>
	  	<Link to='/blog'>
	  		<Box text='Blog' img={blog} 
	  			 description="What deep thoughts go on in my head? Sometimes I’ve got opinions and feel like I just gotta get them out there into the world." 
	  		/>
	  	</Link>
	  	<Link to='/'>
	  		<Box text='New Projects' img={bulb} 
	  			 description="Yeah...you can't actually click on this one (yet!). But what cool stuff am I working on? Currently, programming a couple iOS apps with ReactNative, and building a roblox game!" 
	  		/>
	  	</Link>
	  	</BoxContainer>
	  	<Footer  />
	 </React.Fragment>
  )
}
