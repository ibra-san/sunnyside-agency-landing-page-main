import React from 'react'

function Section4() {
  return (
    <div className='Section4'>
      <h1 className='Section4__Title'>CLIENT TESTIMONIALS</h1>

      <div className='Section4__Client'>
        <div className='Section4__Client--Emily'>
          <img className='Section4__Client--Emily--Img' src='images/image-emily.jpg' alt='Client Emily' />
          <p className='Section4__Client--Emily--Body'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <p className='Section4__Client--Emily--Name'>Emily R.</p>
          <p className='Section4__Client--Emily--Job'>Marketing Director</p>
        </div>

        <div className='Section4__Client--Thomas'>
          <img className='Section4__Client--Thomas--Img' src='images/image-thomas.jpg' alt='Client Thomas' />
          <p className='Section4__Client--Thomas--Body'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. </p>
          <p className='Section4__Client--Thomas--Name'>Thomas S. </p>
          <p className='Section4__Client--Thomas--Job'>Chief Operating Officer</p>
        </div>

        <div className='Section4__Client--Jennie'>
          <img className='Section4__Client--Jennie--Img' src='images/image-jennie.jpg' alt='Client Jennie' />
          <p className='Section4__Client--Jennie--Body'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
          <p className='Section4__Client--Jennie--Name'>Jennie F.</p>
          <p className='Section4__Client--Jennie--Job'>Business Owner</p>
        </div>
      </div>
    </div>
  )
}

export default Section4