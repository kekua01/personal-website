import React from "react"
import styles from "../static/welcome.module.css"

export default function Welcome(props) {
  return (
  	<div className={styles.container}>
  		<h3 className={styles.welcome}>Welcome.</h3>
  		<p className={styles.hello}>Everyone likes to be welcomed! Welcome to my online portfolio.
  		I'm Coby, the guy who made this site and who's stuff you're checking out. Start clicking
  		things to find out more about me!</p>
  	</div>
  )
 }