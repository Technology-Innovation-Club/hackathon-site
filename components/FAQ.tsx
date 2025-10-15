"use client";
import { ExpandMoreRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>("faq-1");

  const styles = {
    accordionRoot: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "black",
      marginBottom: "20px",
      padding: "10px",
      borderRadius: "15px",
      boxShadow: "none",
    },
    accordionSummaryRoot: {
      padding: "0 1rem",
      minHeight: "48px",
      "&.MuiExpanded": {
        minHeight: "48px",
      },
    },
    accordionDetailsRoot: {
      padding: "0 1rem 1rem",
    },
    expandIcon: {
      color: "black",
    },
    errorIcon: {
      verticalAlign: "middle",
      color: "red",
    },
    typographyQs: {
      fontWeight: "Bold",
      fontFamily: "var(--font-whyte-inktrap), sans-serif",
    },
    typographyAns: {
      fontWeight: "Normal",
      fontFamily: "var(--font-whyte-inktrap), sans-serif",
    },
  };

  const faqList: FAQItem[] = [
    {
      id: "faq-1",
      question: "What is a Hackathon?",
      answer:
        "Hackathons are events where programmers collaborate together to create new software and hardware projects. While websites and mobile apps are common types of hacks, you are encouraged to build anything your imagination inspires.",
    },
    {
      id: "faq-2",
      question: "What is TIC Hackathon 2.0?",
      answer:
        "A 24-hour innovation challenge at Pan-Atlantic University (Oct 24–25, 2025) where students build and pitch AI-powered solutions.",
    },
    {
      id: "faq-3",
      question: "Who can participate?",
      answer:
        "Participation is limited to PAU students for this edition.",
    },
    {
      id: "faq-4",
      question: "What is the theme?",
      answer:
        "Reimagining Today with AI. Participants are to build solutions that leverage AI across domains like education, fintech, and productivity.",
    },
    {
      id: "faq-5",
      question: "How many people can be on a team and what roles are recommended?",
      answer:
        "Teams could be composed of 1 - 4 members. Recommended roles: frontend developer, backend developer, AI/ML developer, and a product manager.",
    },
    {
      id: "faq-6",
      question: "Can we start building before the hackathon?",
      answer:
        "No implementation before the event. Ideation is allowed, but all building must occur during the hackathon.",
    },
    {
      id: "faq-7",
      question: "What must our project include?",
      answer:
        "An application of AI and an MVP demo. Teams are penalized if they do not demo an MVP.",
    },
    {
      id: "faq-8",
      question: "Will there be mentorship?",
      answer:
        "Yes. Each qualifying team is assigned a mentor from Oct 17 until event day.",
    },
    {
      id: "faq-9",
      question: "What is the prize pool?",
      answer:
        "₦1 million in startup funding (1st ₦500,000; 2nd ₦300,000; 3rd ₦200,000).",
    },
    {
      id: "faq-10",
      question: "How are projects judged?",
      answer:
        "Criteria: Originality, Viability, Scalability, Functionality, Teamwork, Presentation. MVP demo is required.",
    },
    {
      id: "faq-11",
      question: "Are meals provided?",
      answer:
        "Yes. Dinner on Friday and breakfast on Saturday. Teams have all-day access to the hack space.",
    },
    {
      id: "faq-12",
      question: "Where is it held and is it in-person?",
      answer:
        "In-person at Pan-Atlantic University (Hack space & Demo).",
    },
  ];
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const generateAccordions = () => {
    return faqList.map((faq, index) => (
      <Accordion
        key={faq.id}
        expanded={expanded === faq.id}
        onChange={handleChange(faq.id)}
        style={styles.accordionRoot}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreRounded style={styles.expandIcon} />}
          aria-controls={`panel${index}a-content`}
          id={`panel${index}a-header`}
          style={styles.accordionSummaryRoot}
        >
          <Typography style={styles.typographyQs}>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails style={styles.accordionDetailsRoot}>
          <Typography style={styles.typographyAns}>{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    ));
  };

  return (
    <div className="md:items-between relative z-10 mx-auto px-8 pb-12 pt-24 sm:px-16 md:px-20 md:py-40">
      <Container id="card" disableGutters>
        <Paper
          elevation={0}
          style={{ padding: 20, marginTop: 20, backgroundColor: "transparent" }}
        >
          <Grid container spacing={2}>
            {/* This Grid item will take full width on small screens and half width on medium and larger screens */}
            <Grid item xs={12} md={6}>
             <div className="md:sticky top-24">
             <h1 className="mb-0 font-pp-mondwest text-4xl animate-fade-in-up">
                Frequently Asked Questions
              </h1>
              <h1 className="mb-10 font-pp-mondwest text-4xl animate-fade-in-up">
                - we’ve got the answers.
              </h1>
             </div>
            </Grid>
            {/* This Grid item will also take full width on small screens and half width on medium and larger screens */}
            <Grid item xs={12} md={6}>
              <Container disableGutters component="section" id="faq-accordion">
                {generateAccordions()}
              </Container>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default FAQ;
