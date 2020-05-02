import React from 'react';


import './css/styles.css'
import './js/scripts'
// import './assets/mail/jqBootstrapValidation'
// import './assets/mail/contact_me'
import 'jquery'


import Navigation from './Navigation'
import Masthead from './Masthead'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import PortfolioModal from './PortfolioModal'

const App = () => {
    return(
        <div>
            <Navigation />
            <Masthead />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <PortfolioModal />
       </div>
    )
}
export default App;