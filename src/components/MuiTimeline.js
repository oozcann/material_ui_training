import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import React from 'react'

const MuiTimeline = () => {
    const cities = [
        {name:'City A', hour: '9.30 pm'},    
        {name:'City B', hour: '7.30 pm'},    
        {name:'City C', hour: '10.00 pm'}    
    ];
    return (
        <Timeline position='alternate'>
            {
                cities.map(city => (
                    <TimelineItem key={city.name}>
                        <TimelineOppositeContent color='text.secondary'>{city.hour}</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='secondary' variant='outlined'/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            {city.name}
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
    )
}

export default MuiTimeline
