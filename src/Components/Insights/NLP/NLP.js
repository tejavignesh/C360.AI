import React from 'react'

const NLP = () => {
    return (
        <div>
            <div>
  <div className="insighthed powerbibanner">
    <div className="container">
      <div className="row">
        <div className="col-md-5 d-flex align-items-center ">
          <div>
            <h4 className="wow fadeInUp animated">Insights</h4>
            <h3 className="wow fadeInUp animated">Natural Language
              Processing
            </h3>
            <p className="wow fadeInDown animated">Natural Language Processing, or NLP for short, is broadly defined as the
              automatic manipulation of natural language, like speech and text, by
              software.</p>
          </div>
        </div>
        <div className="col-md-7 text-right">
          <img src="images/nlpvideo.jpg" className="wow fadeInUp animated" />
        </div>
      </div>
    </div>
  </div>  
  <div className="whatmachine">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h2 className="titleone wow fadeInUp animated">What is Natural Language
              Processing?
            </h2>
            <p>Natural language processing (NLP) is a field of artificial intelligence in which computers
              analyze, understand, and derive meaning from human language in a smart and useful way. By
              utilizing NLP, developers can organize and structure knowledge to perform tasks such as
              automatic summarization, translation, named entity recognition, relationship extraction,
              sentiment analysis, speech recognition, and topic segmentation.</p></div>
        </div>
        <div className="col-md-6 text-right">
          <img src="images/nlpimg.jpg" className="wow fadeInUp animated" />
        </div>
      </div>
    </div>
  </div>
  <div className="benfitscol">
    <div className="container">
      <h2 className="titleone wow fadeInUp animated">The benefits of Natural Language Processing</h2>
      <div className="row pad_t50">
        <div className="col-md-4">
          <div className="benfitcnt">
            <h5>Perform large-scale analysis
            </h5>
            <p> NLP technology allows for text analysis at scale on all manner
              of documents, internal systems, emails, social media data,
              online reviews, and more.</p>
            <a href="#" className="benfitlink"><img src="images/relatedarrow-b.png" className="wow fadeInUp animated" /></a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="benfitcnt">
            <h5> Get a more objective and accurate
              analysis</h5>
            <p> Better insight into business metrics. Spend more time
              revealing insights and developing your strategy than you do
              pulling data.</p>
            <a href="#" className="benfitlink"><img src="images/relatedarrow-b.png" className="wow fadeInUp animated" /></a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="benfitcnt">
            <h5> Improve customer satisfaction
            </h5>
            <p> NLP tools allow you to automatically analyze and sort
              customer service tickets by topic, intent, urgency, sentiment,
              etc., and route them directly to the proper department or
              employee, so you never leave a customer in the cold.
            </p>
            <a href="#" className="benfitlink"><img src="images/relatedarrow-b.png" className="wow fadeInUp animated" /></a>
          </div>
        </div>
      </div>
      <div className="row pad_t50">
        <div className="col-md-4">
          <div className="benfitcnt">
            <h5>Empower your employees
            </h5>
            <p>With all the human hours you’ll save by automating processes
              and using data analysis to its full potential, your employees
              will be able to focus on what matters: their actual jobs.</p>
            <a href="#" className="benfitlink"><img src="images/relatedarrow-b.png" className="wow fadeInUp animated" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="ourofferings">
    <div className="container">
      <h2 className="titleone wow fadeInUp animated">Ethics of Natural Language Processing
      </h2>
      <div className="row pad_t80">
        <div className="col-md-4">
          <div className="servicebox wow fadeInUp animated">
            <div><img src="images/part-speech.png " alt="Services" /></div>
            <h4>Part of Speech (POS) tagging
            </h4>
            <p className="min-h100">Given a sentence, determine POS tags for each word
              (e.g., NOUN, VERB, ADV, ADJ).
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="servicebox wow fadeInUp animated">
            <div><img src="images/sentment.png" alt="Services" /></div>
            <h4>Sentiment Analysis
            </h4> 
            <p className="min-h100">Given a sentence, determine its polarity (e.g., positive,
              negative, neutral), or emotions (e.g., happy, sad,
              surprised, angry)</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="servicebox wow fadeInUp animated">
            <div><img src="images/conference.png" alt="Services" /></div>
            <h4>Coreference Resolution
            </h4>
            <p className="min-h100">Given a sentence, determine which words (“mentions”)
              refer to the same objects (“entities”). for example
              (Manning is a great NLP professor, he worked in
              academia for over 25 years)
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="servicebox wow fadeInUp animated">
            <div><img src="images/wordsence.png " alt="Services" /></div>
            <h4>Word Sense Disambiguation
              (WSD)
            </h4>
            <p className="min-h100">Many words have more than one meaning, we have to
              select the meaning which makes the most sense in
              context
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
export default NLP;