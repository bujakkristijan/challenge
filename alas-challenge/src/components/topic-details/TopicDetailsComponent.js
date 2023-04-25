import React from 'react'
import './TopicDetailsComponent.css'

const TopicDetailsComponent = (props) => {

    const selectedTopic = props.topic;
    // alert(selectedTopic);
  return (
    <div className='topic-details-container'>
        {selectedTopic != undefined && <div className='topic-title'>Information on topic: {selectedTopic.label}</div>}
        {selectedTopic != undefined && <div className='topic-total-mentions'>Total mentions: {selectedTopic.volume}</div>}
    </div>
  )
}

export default TopicDetailsComponent