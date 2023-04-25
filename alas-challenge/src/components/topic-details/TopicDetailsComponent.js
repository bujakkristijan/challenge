import React from 'react'
import './TopicDetailsComponent.css'

const TopicDetailsComponent = (props) => {

    const selectedTopic = props.topic;
    // alert(selectedTopic);
  return (
    <div className='topic-details-container'>
        {selectedTopic != undefined && <div className='topic-title'>Information on topic: {selectedTopic.label}</div>}
        {selectedTopic != undefined && <div className='topic-total-mentions'>Total mentions: {selectedTopic.volume}</div>}
        <div className='sentiment-main-container'>
        {selectedTopic != undefined && selectedTopic.sentiment.positive != undefined && selectedTopic.sentiment.positive != null 
            && <div className='sentiment-container'>
                    <label className='label-sentiment'>Positive: </label>
                    <div className='div-positive-sentiment'>{selectedTopic.sentiment.positive}</div>
                </div>}
        {selectedTopic != undefined && selectedTopic.sentiment.neutral != undefined && selectedTopic.sentiment.neutral != null 
            && <div className='sentiment-container'>
                    <label className='label-sentiment'>Neutral: </label>
                    <div className='div-neutral-sentiment'>{selectedTopic.sentiment.neutral}</div>
                </div>}
        {selectedTopic != undefined && selectedTopic.sentiment.negative != undefined && selectedTopic.sentiment.negative != null 
            && <div className='sentiment-container'>
                    <label className='label-sentiment'>Negative: </label>
                    <div className='div-negative-sentiment'>{selectedTopic.sentiment.negative}</div>
                </div>}
        </div>
    </div>
  )
}

export default TopicDetailsComponent