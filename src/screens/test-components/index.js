import * as React from 'react'
import Button from '../../components/button'
import ButtonCircle from '../../components/button-circle'
// import Carousel from '../../components/carousel'
import { withTrans } from '../../i18n/withTrans'
import './test-components.scss'


const TestComponents = ({ t }) => (
  <>
    <div className='testContainer'>
      <h1>Test components</h1>
      <Button text="Work with us" link="/" />
      <Button text="Work with us" light={true} />
      <br />
      <ButtonCircle link='/'/>
      <ButtonCircle link='/' leftArrow={true}/>
      <ButtonCircle leftArrow={true} light={true} darkArrow={true} />
      <ButtonCircle leftArrow={true} light={true} />
      <ButtonCircle transparent={true} />
      <ButtonCircle white={true} />

      <div>
        {/* <Carousel /> */}
      </div>
    </div>
  </>
)

export default withTrans(TestComponents)
