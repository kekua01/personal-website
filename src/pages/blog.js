import React from "react"
import Header from "../components/header"
import Heading from "../components/heading"
import Nav from "../components/nav"
import Contentb from "../components/contentb"
import bud from "../static/bud.png"
import gal from "../static/gal.png"
import abe from "../static/abe.png"



export default function Blog() {

  return (
    <div>
    	<Header>
    		<Heading title='Blog' href='/' linkText='Home' />
    		<Nav />
  		</Header>

  		<Contentb img={bud} 
	  		title="My Lateness Problem"
	  	 	link="/lateness"
	  	 	entry="Why am I so often late? Does this mean I'm optimistic or irresponsible? I think there's a large number of peope who, like me, are chronically late, so here I dive into the upsetting phenomenon." 
	  	 ></Contentb>

  		<Contentb img={abe} 
	  		title="The Sweet Spot of Agreeableness"
	  	 	link="/agreeable"
	  	 	entry="How agreeable should one be? Where is the ideal line between efficiency and being a twat?" 
	  	 ></Contentb>
	  	 <Contentb img={gal} 
	  		title="The Deal with Kids and Luck"
	  	 	link="/luck"
	  	 	entry="Was I the only one who felt, generally, more 'lucky' as a kid? Why does luck seem to diminish as we get older?" 
	  	 ></Contentb>
	  	 
      
    </div>
  );
}