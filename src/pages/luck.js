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
    	<h1 className={styles.title}>The Deal with Kids and Luck</h1>
    	<p className={styles.post}>
    		I was a lucky kid. I don’t know when or how I go the reputation, 
    		but once it happened it quickly built on itself: I was the lucky child.
    		Maybe I just got lucky in this one scenario and then every time something 
    		lucky happened to me, it was proof of my luckiness (but when something 
    		happened to my siblings it just some usual luck).  It’s like driving 
    		a new car around and suddenly the streets seemed to be filled with that 
    		type of car in the coming weeks, even though it’s really just you noticing 
    		them, and very unlikely that there are that many more cars.

    		<br></br><br></br>

    		The rest of this post is being finished up...come back soon!



    	</p>
    </div>
    </div>
  )
 }