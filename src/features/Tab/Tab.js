import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Skills from '../skills/Skills';
import FrameWorks from '../skills/FrameWorks';
import Languages from '../skills/Languages';
import colorSharp from '../../assets/img/color-sharp.png';

const TabMenu = () => {
  return (
    <section className="skill" id="Skills">
    <Container>
        <div className="skill-bx">
      <Tabs
        defaultActiveKey="Languages"
        id="fill-tab-example"
        className="mb-3"
        fill
        mountOnEnter={true}
        autPlay={true}
        autoPlaySpeed={1000}
        showDots={true}
      >
        <Tab eventKey="Languages" title="Languages" >
          <Languages />
        </Tab>
        <Tab eventKey="FrameWorks" title="FrameWorks">
          <FrameWorks />
        </Tab>
        <Tab eventKey="Skills" title="Skills">
          <Skills />
        </Tab>
      </Tabs>
        </div>
    </Container>
      <img src={colorSharp} className="background-image-left" alt="Color Sharp" />
    </section >
  );
}

export default TabMenu;