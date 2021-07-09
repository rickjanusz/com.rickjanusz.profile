import React, { useEffect } from 'react'
import PortableText from '@sanity/block-content-to-react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Serializer } from '../utils/serializer'

import { Canvas } from 'react-three-fiber'

import Model from '../components/model'
import Controls from '../components/controls'

import helmet from '../components/DamagedHelmet.glb'
import auto from '../assets/automator.mp4'
// import bg from '../assets/neonbg.png'
gsap.registerPlugin(ScrollTrigger)

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  transition: var(--transition);
  /* background-image: url({bg}); */
  section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .bg {
      /* box-shadow: inset 0px 0px 300px rgb(0, 0, 0); */
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
  .overlay {
    background: ${(props) => props.theme.primary};
    height: 100vh;
    width: 94vw;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    opacity: 0.7;
    mix-blend-mode: overlay;
    -webkit-clip-path: polygon(19% 0, 84% 0, 100% 100%, 29% 100%);
    clip-path: polygon(19% 0, 84% 0, 100% 100%, 29% 100%);
    /* box-shadow: inset 0 0 300px rgba(0, 0, 0, 01); */
  }

  .overlay2 {
    background: ${(props) => props.theme.primary};
    height: 100vh;
    width: 94vw;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    opacity: 0.6;
    mix-blend-mode: multiply;
    -webkit-clip-path: polygon(34% 0, 68% 0, 35% 100%, 0 100%);
    clip-path: polygon(34% 0, 68% 0, 35% 100%, 0 100%);
    /* box-shadow: inset 0 0 300px rgba(0, 0, 0, 0.2); */
  }
`
const Cont = styled.div`
  z-index: 3;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 2fr 1fr 0.5fr;
  grid-gap: 20px;
  margin: 0 30px;
  /* font-weight: bold; */
  font-family: Arial, sans-serif;
  color: white;
  h1 {
    color: white;
    font-size: 60px;
    text-transform: uppercase;
    text-align: left;
    margin: 0 30px 0 0;
  }
  p {
    font: 16px Arial, sans-serif;
    width: 100%;
  }
  a {
    position: relative;
    margin: 0;
    z-index: 3;
    font: bold 2vw Arial, sans-serif;
    width: 40vw;
    background-color: red;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: white;
  }
  canvas {
    height: 90vh;
    width: 100vw;
    z-index: 100;
  }
  video {
    width: 50vw;
    margin: 0 auto;
    position: relative;
    left: calc(50% - 25vw);
  }
`

export default function HomepageFeatures({ features }) {
  const feats = features[0]
  // console.log(feats)

  useEffect(() => {
    const innerHeight = window.innerHeight
    const bgs = [
      feats.subBanner1.asset.fluid.src,
      feats.subBanner2.asset.fluid.src,
      feats.subBanner3.asset.fluid.src,
    ]
    gsap.utils.toArray('section').forEach((section, i) => {
      section.bg = section.querySelector('.bg')
      section.bg.style.backgroundImage = `url(${bgs[i]})`

      console.log(section.bg)
      if (i) {
        section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`

        gsap.to(section.bg, {
          backgroundPosition: `50% ${innerHeight / 2}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            scrub: true,
          },
        })
      } else {
        section.bg.style.backgroundPosition = '50% 0px'

        gsap.to(section.bg, {
          backgroundPosition: `50% ${innerHeight / 2}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    })
  }, [
    feats.subBanner1.asset.fluid.src,
    feats.subBanner2.asset.fluid.src,
    feats.subBanner3.asset.fluid.src,
  ])

  return (
    <Wrap className="fullWidth">
      <section className="panel panel2">
        <div className="overlay"></div>
        <div className="overlay2"></div>
        <div className="feature bg"></div>

        <Cont>
          <Canvas camera={{ position: [0, 0, 1] }}>
            <ambientLight intensity={1} />
            <Model url={helmet} />
            <Controls
              autoRotate
              enablePan={false}
              enableZoom={false}
              enableDamping
              dampingFactor={0.3}
              rotateSpeed={1}
              // maxPolarAngle={Math.PI / 2}
              // minPolarAngle={Math.PI / 2}
            />
          </Canvas>
          <div>
            <h1>{feats.subHL1}</h1>
            <PortableText
              blocks={feats._rawS1Description}
              serializers={Serializer}
            />
          </div>
          {/* <Link to="#">LINK &gt;</Link> */}
        </Cont>
      </section>
      <section className="panel panel3">
        <div className="overlay"></div>
        <div className="overlay2"></div>
        <div className="feature bg"></div>

        <Cont>
          <video src={auto} controls mute autoPlay loop playsInline></video>
          <div>
            <h1>{feats.subHL2}</h1>
            <PortableText
              blocks={feats._rawS2Description}
              serializers={Serializer}
            />
          </div>
          {/* <Link to="#">LINK &gt;</Link> */}
        </Cont>
      </section>
      <section className="panel panel4">
        <div className="overlay"></div>
        <div className="overlay2"></div>
        <div className="feature bg"> </div>
        <Cont>
          <img src="" />
          <div>
            <h1>{feats.subHL3}</h1>
            <PortableText
              blocks={feats._rawS3Description}
              serializers={Serializer}
            />
          </div>
          {/* <Link to="#">LINK &gt;</Link> */}
        </Cont>
      </section>
    </Wrap>
  )
}
