import logo from './logo.svg';
import './App.css';
import avatar from "./images/avatar.png";
import github_logo from "./images/github-mark.png"
import linkedin_logo from "./images/linkedin_mark.png"
import resume_logo from "./images/resume_mark.png"
import email_logo from "./images/email_mark.png"
import React from 'react';
import {useRef} from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import {timelineItemClasses} from "@mui/lab";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import switch_witch_icon from "./images/switch_witch_icon.png"
import chatbot from "./images/chatbot.jpg"
import social_media_project from "./images/social_media_chatbot.jpg"

function MediaButton(props) {
   return (
       <a href={props.link} target="_blank">
            <img src={props.src} alt="icon" width={"75px"} height={"75px"}/>
        </a>
   );
}

function TimeLine() {
    return (
        <Timeline
            sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.5,
            },
        }}
        >
            <TimelineItem>
                <TimelineOppositeContent color="textPrimary">
                    <b>Spring 2019</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Started undergraduate studies at Cornell University</TimelineContent>
            </TimelineItem>
            <TimelineItem >
                <TimelineOppositeContent color="textPrimary">
                    <b>Summer 2021</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Software Engineer Intern at Bianfeng @ Hangzhou </TimelineContent>
            </TimelineItem>
            <TimelineItem >
                <TimelineOppositeContent color="textPrimary">
                    <b>Fall 2021</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Teaching Assistant for CS4320 </TimelineContent>
            </TimelineItem>
            <TimelineItem >
                <TimelineOppositeContent color="textPrimary">
                    <b>Spring 2022</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Research Assistant for Business Simulation Lab @ Johnson Business School </TimelineContent>
            </TimelineItem>
            <TimelineItem >
                <TimelineOppositeContent color="textSecondary">
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Web Developer @ Cornell Daily Sun </TimelineContent>
            </TimelineItem>
            <TimelineItem >
                <TimelineOppositeContent color="textSecondary">
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>AEW Facilitator for CS3110 </TimelineContent>
            </TimelineItem>
            <TimelineItem >
                <TimelineOppositeContent color="textPrimary">
                    <b>Fall 2022</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Graduated from Cornell with B.A. in Computer Science & Economics </TimelineContent>
            </TimelineItem>
            <TimelineItem >
                <TimelineOppositeContent color="textPrimary">
                    <b>Spring 2023</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Started master's at Cornell University </TimelineContent>
            </TimelineItem>
                <TimelineItem >
                    <TimelineOppositeContent color="textPrimary">
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Research Assistant for DesignAI Lab @ Cornell Bowers CIS</TimelineContent>
                </TimelineItem>
            <TimelineItem >
                <TimelineOppositeContent color="textSecondary">
                    <b>Summer 2023</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Incoming Software Engineer Intern @ Mattel163</TimelineContent>
            </TimelineItem>
            <TimelineItem >
                <TimelineOppositeContent color="textSecondary">
                    <b>Fall 2023</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Expected graduation from Cornell with M.Eng in Computer Science</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

function Project(props) {
    var cardStyle = {
        display: 'block',
        width: '20vw',
        transitionDuration: '0.3s',
        height: '40vw',
        flexGrow: 1,
        marginLeft: 10,
        marginRight: 5
    };
   return (
       <Card sx={{ maxWidth: 345, maxHeight: 650, margin: "15px", flexGrow: 1 }}>
        <CardMedia
            component="img"
            sx={{ height: 345 }}
            image={props.src}
            alt="project_image"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="text.primary">
                <a href={props.link} target={"_blank"}><strong>{props.name}</strong></a>
            </Typography>
            <Typography gutterBottom variant="body2" color="text.primary">
                {props.role}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
                {props.description}
            </Typography>
        </CardContent>

    </Card>
   );
}



function App() {
    const about = useRef(null);
    const experience = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null)

    const scroll = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
    <div className="App">
        <header>
            <nav>
                <ul>
                    <li onClick={()=>scroll(about)}>ABOUT ME</li>
                    <li onClick={()=>scroll(experience)}>EXPERIENCES</li>
                    <li onClick={()=>scroll(projects)}>PROJECTS</li>
                    {/*<li onClick={()=>scroll(contact)}>CONTACT ME</li>*/}
                </ul>
            </nav>
        </header>

        <div ref={about} className={"headline section"}>
            <div className={"avatar"}>
                <img src={avatar} alt={"avatar"} width={"200px"} height={"200px"}/>
            </div>
            <div>
                <h1> Ashley Yu </h1>
                <div className={"bodytext"}>
                    Hi everyone, welcome to my website! This is Ashley Yu, a current CS MEng student at Cornell. I'm
                    passionate about web development, game design, as well as mobile development.
                </div>
                <div>
                    <MediaButton src={github_logo} link={"https://github.com/Ashley1014"}/>
                    <MediaButton src={linkedin_logo} link={"https://www.linkedin.com/in/yy346/"}/>
                    <MediaButton src={resume_logo} link={"https://docs.google.com/document/d/14QP5YEMHHe7oXOsK5Zq7yr1nngPTPvGHMCChyDqvNg0/edit?usp=sharing"}/>
                    <MediaButton src={email_logo} link={"mailto:yy346@cornell.edu"}/>
                </div>
            </div>
        </div>

        <div ref={experience} className={"section"}>
            <h1>Experiences</h1>
            <TimeLine />


        </div>

        <div ref={projects} className={"section"}>
            <h1>Projects</h1>
            <div style={{display: "flex", width: "90%", margin: "auto"}}>
            <Project link={"https://gdiac.cs.cornell.edu/temp/showcase/gallery/switch_witch/"} src={switch_witch_icon} role={"Programmer"} name={"Switch Witch"} description={"Switch Witch is a light strategy game in the medieval fantasy world setting. Using C++, I implemented the game interface and the core attacking algorithms for this project."}/>
                <Project link={"https://coachera.cs.cornell.edu/"} src={chatbot} name={"CoachEra"} role={"Software Engineer"} description={"CoachEra is a chat-based mobile application that helps learners keep track of their learning progress. Using React Native, I implemented the dashboard user interface for this project."}/>
                <Project name={"Social Media Chatbot"} src={social_media_project} role="Frontend Engineer" description={"Social Media Chatbot is an educational chatbot designer utilizing advanced language models. Using React, I implemented the dialogue builder UI for educators to interact with and connected it to backend API."}/>
            </div>
        </div>

        {/*<div ref={contact} className={"section"}>*/}
        {/*    <h1>Contact Me</h1>*/}
        {/*</div>*/}

    </div>
  );
}

export default App;
