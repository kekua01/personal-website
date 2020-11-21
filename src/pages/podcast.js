import React from "react"
import Header from "../components/header"
import Heading from "../components/heading"
import Nav from "../components/nav"
import Content from "../components/content"
import pod from "../static/podcast.png"

export default function Podcast() {
  return (
  	<div style={{marginBottom: "30px"}}>
	    <Header>
	  		<Heading title='Project Alchemy' href='/' linkText='Home' />
	  		<Nav />
	  	</Header>
	  	<p style={{fontSize: "27px", fontStyle: "italic", margin: "50px 200px 10px 200px"}}>
	  		How does one live a joyful, content, and purposeful life? More importantly – 
	  		how do we know if we're doing it?
	  	</p>
	  	<p style={{textAlign: "center", fontFamily: "Copse, sans-serif", marginBottom: "75px"}}>–me, sometime in 2019 as I contemplate my life ahead. My podcast highlights some answers:</p>
	  	<Content img={pod} 
	  		title="#1 Looking Past Accomplishments In Order to Find Personal Value, with Thomas Daniel"
	  	 	link="https://podcasts.apple.com/us/podcast/1-looking-past-accomplishments-in-order-to-find-personal/id1463669729?i=1000444638291"
	  	 	entry="Thomas Daniel is a pastor at Covenant Presbyterian. He recounts his struggles with refraining
	  	 	 from using accomplishments to provide value; only by doing this, he believes, are we able to find 
	  	 	 fulfillment, and accept the person we are. Though raised in a family that outlined success in a
	  	 	  traditional manner – attend a good college, procure a high-paying salary, and so on – Thomas's 
	  	 	  life has strayed far from the norm, and he shares the highs and lows in his story to do so. " 
	  	 ></Content>
	  	 <Content img={pod}
	  	 	title="#2 Building Powerful Relationships and Giving Back to Others, with Scott Zimmerman"
	  	 	link="https://podcasts.apple.com/us/podcast/2-building-powerful-relationships-giving-back-to-others/id1463669729?i=1000440249353"
	  	 	entry="Scott Zimmerman, the SEL director at St. Andrew's Episcopal School, shares his 
	  	 	take on what brings him fulfillment and joy: making an impact on others. He describes 
	  	 	the moments of clarity that have allowed him to make the right choices, as well 
	  	 	as how he finds the courage to stand with people in their times of struggle."></Content>
	  	 <Content img={pod}
	  	 	title="#3 Entrepreneurship and Experimentation, with Rufus Griscom"
	  	 	link="https://podcasts.apple.com/us/podcast/3-entrepreneurship-experimentation-rufus-griscom/id1463669729?i=1000442320829"
	  	 	entry="Rufus Griscom, the father of multiple companies including Babble.com, shares his struggles 
	  	 	and triumphs in entrepreneurship, and dissects what ultimately led to fulfillment for him. 
	  	 	As an optimist who believes all success is team-driven, Rufus encourages us to try numerous 
	  	 	different endeavors, and to embrace the failures that come with them."></Content>
	  	 <Content img={pod}
	  	 	title="#4 Following Your Passion, with World Famous Musician Martie Maguire"
	  	 	link="https://podcasts.apple.com/us/podcast/4-following-your-passion-world-famous-musician-martie/id1463669729?i=1000444074200"
	  	 	entry="The senior member of the Dixie Chicks shares some of her story in their rise to 
	  	 	fame. Martie reflects on what brought her fulfillment, and how the goal of playing 
	  	 	music was never to achieve stardom."></Content>
	  	 <Content img={pod}
	  	 	title="#5 A Pragmatic View of Life, with Josh Nelson"
	  	 	link="https://podcasts.apple.com/us/podcast/5-a-pragmatic-view-of-life-with-josh-nelson/id1463669729?i=1000445165140"
	  	 	entry="Joshua Nelson, the Chief Academic Officer at St. Andrew's Upper School, shares 
	  	 	the whys and hows of his journey to get where he is. In this powerful interview, 
	  	 	Josh speaks on dealing with other people's perspectives of ourselves, of taking a 
	  	 	logistic approach to manage our worries, and reflecting on the intentionality of 
	  	 	our actions. The penultimate episode of Project Alchemy."></Content>
	  	 <Content img={pod}
	  	 	title="#6 Joy First, and Everything Will Follow (with Gilbert Tuhabonye)"
	  	 	link="https://podcasts.apple.com/us/podcast/6-joy-first-everything-will-follow-gilbert-tuhabonye/id1463669729?i=1000446477457"
	  	 	entry="In 1993, Gilbert survived a massacre of the Burundian Civil War.
	  	 	He recovered and returned to running, even winning a collegiate national 
	  	 	championship in the 800m. Gilbert is the founder of the Gazelle training 
	  	 	group in Austin, and has impacted the lives of people within and beyond the 
	  	 	community. For him, a large part of success is helping other people find it. 
	  	 	Gilbert shares how he applies a lifestyle of FOCUS to running and to life."></Content>
	</div>
  )
}