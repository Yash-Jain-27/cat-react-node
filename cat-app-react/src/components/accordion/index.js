import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { useStyles } from './style';

export default function AccordionComponent(props) {
    const { catDetails } = props
    const { image, name, description, origin } = catDetails
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles()

    return (
        <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{
                    content: classes.alignItemCenter
                }}
            >
                <Avatar
                    alt="Remy Sharp"
                    src={image?.url}
                    sx={{ width: 70, height: 70 }}
                >
                    {name.charAt(0)}
                </Avatar>
                <Typography pl={10}>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
                <Typography>
                    Desciption: {description}
                </Typography>
                <Typography>
                    Origin: {origin}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}
