import React from "react"
import styles from "../static/boxcontainer.module.css"

export default function BoxContainer({ children }) {
  return (
  	<div className={styles.container}>{children}</div>
  )
}