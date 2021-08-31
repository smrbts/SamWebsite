import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/headshot.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Sam Roberts.
        </BigTitle>
        <Subtitle>
          I'm a software engineer with a strong interest in product and domain driven design. <br /> 
          I'm committed to test driven development and pair-programming. 
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Rover Rentals"
            link="https://www.youtube.com/watch?v=HZ3nWTit9C0"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A dog walking React Native application to help overcrowding in animal shelters.
          </ProjectCard>
          <ProjectCard
            title="Fantasy Baseball Manager"
            link="https://www.youtube.com/watch?v=BnaCZ3Ewpb4&t=2s"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Create your own dynasty fantasy MLB squad with live-time stats. Made with PERN stack.
          </ProjectCard>
          <ProjectCard
            title="Mountain Runner"
            link="https://www.youtube.com/watch?v=BXVm_ANohDQ"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A video game enthusiast's 2D Retro side scroller made with vanilla JS, HTML, and CSS.
          </ProjectCard>
          <ProjectCard
            title="Professor Oak's Handbook"
            link="https://www.youtube.com/watch?v=0ztxrFiRIHQ&t=9s"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A Pokemon master's reference book, complete with a quiz! Made with Ruby on Rails, HTML, and CSS.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About Sam</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            I'm a full stack developer who enjoys creating applications that look great and get the job done. I love
            technology and working with a team to make a difference.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          What started as working for a few hours a night in Unity, making video games after my job had ended for the
          day, led me to take a risk and dive head first into the world of software development. After a few months of
          of self-teaching, I enhanced my learning efforts by graduating from Flatiron's coding bootcamp.
          <br />
          <br />
          Fast forward a few years, and I have helped build applications for supermajor oil operators as well as writing
          code to redefine how children can become empowered learners. These days I primarily write a lot of JavaScript
          using React, Node, and Meteor but I have experience and familiarity with tech such as: Vue.js, Ruby on Rails,
          C#, Cypress E2E testing, Mongo and SQL.
          <br />
          <br />
          Some of my hobbies include video games, ping pong, and rock climbing. I love my family and our three pets: Zu,
          Violet, and Jax.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Contact Me</Title>
          <ContactText>
            Say <a href="mailto:samueljustinroberts@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/smrbts">Github</a> &{' '}
            <a href="https://www.linkedin.com/in/sam-roberts-/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2021 by Sam Roberts</Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
