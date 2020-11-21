import React from "react"
import Header from "../components/header"
import Heading from "../components/heading"
import Nav from "../components/nav"
import styles from "../static/bloghead.module.css"
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
    	<h1 className={styles.title}>My Lateness Problem</h1>
    	<p className={styles.post}>
    		It comes up everywhere. Recently and most often it’s leaving for class. For example, I have Chinese every day in the same room in the same building (and it’s a decently far away). After two semesters of this, you’d think I would have a schedule for leaving down. No. Let’s set the hypothetical start time of 10am. I need to leave at 9:45am on the dot. But somehow no matter what I tell myself, I just don’t put in the effort to actually ensure that I can leave then. 

    		<br></br><br></br>

    		Something always comes up. Most days I’ll just need another two minutes to brush my teeth or finish reading an email. And I think, well even if I do leave later than planned, I actually did that yesterday and it worked out fine because I just speed walked. So then I end up leaving at 9:50 and make it fine. BUT then a new problem arises. I start leaving at 9:50 every day, because that works, right? 

    		<br></br><br></br>

    		Wrong. Because then I’m a few minutes late on that time, and I leave with six or seven minutes and have to awkwardly have run with my backpack bouncing up and down, and I start getting super sweaty so alternate walking and jogging, and it’s freezing outside so it feels ok, but then I enter the Chinese building with a pumping heart, and for some reason that building, is always like 90 degrees, and I have to climb two flights of stairs to get to my room, and I’ve just been booking it to class, and the temperature is extremely different from outside, and I don’t have time to take off my coat because I’m cutting it so close and don’t want to miss the dictation quiz, so by the time I’m at my seat right at 10am I’m so sweaty and I as I disrobe all of my layers, I think about what went wrong and I’m so busy planning on how to leave on time for the next day that this battles for space in my head with the Chinese vocab words I need to know.

    		<br></br><br></br>

    		Sometimes things go perfectly. I leave with a cool thirteen minutes to spare – just a nice walk to enjoy on the way to class. WHAM. Of course, I have to suddenly shit. And I poop every morning on the dot, right after drinking some coffee. But of course, some days there will just be an unexpected second poop that feels like tiny little trolls are just forcing their way out of me – what am I supposed to do, hold it for an hour of Chinese?  不可以

    		<br></br><br></br>

    		My pastor once gave a sermon about how lent isn’t just about giving up vices, but giving up vices to make room for better things in life. So,  one year for lent I ‘gave up’ being late, so I could live a lower-stress life, and also be a safer driver enjoying a normal speed. I also hated feeling like I’d let my teachers down being just a minute late to class (looking back, though, I think some of them needed to take off their toddler pants and not make such a big deal about missing one minute of an 80-minute class). Lent didn’t change anything. I would just drive faster because, fuck, I gave this up for lent so now I really can’t be late for school otherwise teacher and God will punish me. Furthermore, the aggressiveness of my driving has to ease up the closer I get to school, because people on the road have an increasingly higher chance to be classmates, and everyone knows most of each other’s cars among the 200 drivers at school or so, and I don’t want to come off as an aggressive driver because I’m a chill guy, you know? All to say, I need to book it early on. 

    		<br></br><br></br>

    		Conclusion to this post coming soon...

    	</p>
    </div>
    </div>
  )
 }