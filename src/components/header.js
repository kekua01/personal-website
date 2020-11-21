import React from "react"
import headerStyles from "../static/header.module.css"

export default function Header({ children }) {
  return (
  	<div className={headerStyles.container}>{children}</div>
  )
}