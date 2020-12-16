import React from 'react'
import {Helmet} from 'react-helmet'
import Favicon from '../images/favicon.ico'

const HelmetComponent = () => {
  return (
    <Helmet>
    
      <meta property="og:title" content="Jovana Jovanovic portfolio"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://jojovanovic.tk/"/>
    <meta property="og:image" content='https://jojovanovic.tk/images/share.jpg' />
    <meta property="og:image:url" content='https://jojovanovic.tk/images/share.jpg' />
    <mata property="og:image:type" content="image/jpeg"/>
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />
    <meta property='og:description' content="Hello! I am Jovana Web Developer, and this is my personal website. You can take a look at my portfolio, download my CV and see how you can contact me. Let's build something great together!
    "/>
    <meta name="twitter:card" content="summary_large_image"></meta>
      <meta charset="utf-8" />
    <link rel="icon" href={Favicon}/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#b808a0" />
    <meta name="description" content="Hello! I am Jovana Web Developer, I am eager to work with and meet new people, exchange knowledge and opinions, acquire new skills and learn new tricks and techniques." />
   <link href="https://fonts.googleapis.com/css?family=Audiowide|Montserrat&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>

     <link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} /> 

    <title>Jovana Jovanovic portfolio website</title>

    {/*<!--Google analitics-->
<!-- Global site tag (gtag.js) - Google Analytics --> */}

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-122945317-3"></script>
<script>
 {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-122945317-3');`}
</script>

    </Helmet>
  )
}

export default HelmetComponent
