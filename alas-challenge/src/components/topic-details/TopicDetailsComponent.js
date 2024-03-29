import React from 'react'
import './TopicDetailsComponent.css'

const TopicDetailsComponent = (props) => {

    const selectedTopic = props.topic;
    
  return (
    <div className='topic-details-container'>
        {/* null == undefined // true */}
        {(selectedTopic == undefined) && <div className='topic-title'>Select topic from table to see results</div>}
        {selectedTopic != undefined && <div className='topic-title'>Information on topic: {selectedTopic.label}</div>}
        {selectedTopic != undefined && <div className='topic-total-mentions'>Total mentions: {selectedTopic.volume}</div>}
        <div className='sentiment-main-container'>
            {selectedTopic != undefined 
                && <div className='sentiment-container'>
                        <label className='label-sentiment'>Positive: </label>
                        {selectedTopic.sentiment.positive != undefined && <div className='div-positive-sentiment'>{selectedTopic.sentiment.positive}</div>}
                        {selectedTopic.sentiment.positive == undefined && <div className='div-positive-sentiment'>0</div>}
                    </div>}
            {selectedTopic != undefined 
                && <div className='sentiment-container'>
                        <label className='label-sentiment'>Neutral: </label>
                        {selectedTopic.sentiment.neutral != undefined && <div className='div-neutral-sentiment'>{selectedTopic.sentiment.neutral}</div>}
                        {selectedTopic.sentiment.neutral == undefined && <div className='div-neutral-sentiment'>0</div>}
                    </div>}
            {selectedTopic != undefined
                && <div className='sentiment-container'>
                        <label className='label-sentiment'>Negative: </label>
                        {selectedTopic.sentiment.negative != undefined && <div className='div-negative-sentiment'>{selectedTopic.sentiment.negative}</div>}
                        {selectedTopic.sentiment.negative == undefined && <div className='div-negative-sentiment'>0</div>}

                    </div>}
        </div>
    </div>
  )
}

export default TopicDetailsComponent