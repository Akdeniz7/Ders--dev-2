import React from 'react'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import ImgLocation from './ImgLocation'

function PageContent() {
    return (<>
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
            <Project/>
            <About/>
            <Contact/>
            <ImgLocation/>
        </div>
    </>
    )
}


export default PageContent