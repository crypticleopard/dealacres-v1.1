import styles from './navbar2.module.css'

const Navbar03 = () => {

    const Menu = () => (
        <>
          <p>
            <a href="#About">About</a>
          </p>
          <p>
            <a href="#Explore">Explore Neighbourhood</a>
          </p>
          <p>
            <a href="#Projects">Projects</a>
          </p>
          <p>
            <a href="#SimilarLocalities">Similar Localities</a>
          </p>
          <p>
            <a href="Developer">Developer</a>
          </p>
          <p>
            <a href="#Guides">Guides</a>
          </p>
        </>
    );

    return (
      <div className={styles.navbarContainer}>
        <Menu/>
      </div>
    )
}

export default Navbar03