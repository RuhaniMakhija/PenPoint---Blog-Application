import React from 'react'
import classes from "./footer.module.css"
import Image from 'next/image'
import tech from "../../../public/images/tech-logo.png"
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
    <div className={classes.footerSection}>
      <div className={classes.logoContainer}>
      <Image src={tech} width={200} height={200}/>
      </div>
      <div className={classes.exploreContainer}>
        <h4 className={classes.headingRow}>Explore</h4>
        <ul className={classes.listContainer}>

            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blogs</li>
        </ul>
      </div>
      <div className={classes.categoriesContainer}>
      <h4 className={classes.headingRow}>Categories</h4>
      <ul className={classes.listContainer}>
  
            <li>Tech</li>
            <li>Products</li>
            <li>Trending</li>
        </ul>
      </div>
      <div className={classes.trendingBlogs}>
      <h4 className={classes.headingRow}>Trending Blogs</h4>
      <ul className={classes.listContainer}>
  
            <li>Top 5 tech products</li>
            <li>Top 5 tech products</li>
            <li>Top 5 tech products</li>
            <li>Top 5 tech products</li>
        </ul>
      </div>
    </div>

    <div className={classes.logoContainer}>
        
    </div>
    <div className={classes.privacyPolicy}>
    <p>Privacy</p>
    <p>© 2024 Tech Jupiter</p>

        </div>
    </div>
  )
}

export default Footer
