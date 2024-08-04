import PropTypes from 'prop-types';
import React from 'react';

import WidgetFooter from 'containers/WidgetContainers/WidgetFooter';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';

import hooks from './hooks';

export const columnConfig = {
  courseList: {
    withSidebar: {
      lg: { span: 12, offset: 0 },
      xl: { span: 8, offset: 0 },
    },
    noSidebar: {
      lg: { span: 12, offset: 0 },
      xl: { span: 12, offset: 0 },
    },
  },
  sidebar: {
    lg: { span: 12, offset: 0 },
    xl: { span: 4, offset: 0 },
  },
};

export const DashboardLayout = ({ children, sidebar: Sidebar }) => {
  const {
    isCollapsed,
    sidebarShowing,
    setSidebarShowing,
  } = hooks.useDashboardLayoutData();

  const courseListColumnProps = sidebarShowing
    ? columnConfig.courseList.withSidebar
    : columnConfig.courseList.noSidebar;

  return (
    <Container fluid size="xl">
      {/* Banner Component 
      <Banner variant="info" className="my-3">
        Welcome to CBC Academy! Check out our latest courses and updates.
      </Banner>
*/}
      {/* Header Section */}
      <Row className="header text-white py-5" style={{ backgroundImage: 'url(/Banner1.jpg)', height: '450px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Col className="header-content">
          <h1>Welcome to CBC Academy </h1>
          <h1> Online Courses</h1>
          <p>Build up your skills. Explore courses here</p>
          <Form className="d-flex mt-3">
            <FormControl
              type="text"
              placeholder="What do you want to learn?"
              className="mr-2"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Col>
      </Row>

      {/* Main Content Section */}
      <Row>
        <Col {...courseListColumnProps} className="course-list-column">
          {children}
        </Col>
        <Col {...columnConfig.sidebar} className="sidebar-column">
          {!isCollapsed && (<h2 className="course-list-title">&nbsp;</h2>)}
          <Sidebar setSidebarShowing={setSidebarShowing} />
        </Col>
      </Row>

      {/* Learn and Grow Section */}
      <Row className="learn-and-grow text-center text-white py-5" style={{ background: 'linear-gradient(to bottom, #4caf50, #2e7d32)' }}>
        <Col>
          <h2>Learn and Grow</h2>
          <p>
            Our edX learning experience is grounded in cutting-edge cognitive science. With more than two dozen distinct learning features to help you achieve your goals, our approach follows three key principles:
          </p>
          <p>
            <strong>Experience:</strong> Learn new knowledge and skills in a variety of ways, from engaging video lectures and dynamic graphics to data visualizations and interactive elements.
          </p>
          <p>
            <strong>Practice:</strong> Demonstrating your knowledge is a critical part of learning. edX courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.
          </p>
          <p>
            <strong>Apply:</strong> Learning on edX transforms how you think and what you can do, and translates directly into the real world—immediately apply your new capabilities in the context of your job.
          </p>
        </Col>
      </Row>

      {/* Footer Section */}
      <Row>
        <Col>
          <WidgetFooter />
        </Col>
      </Row>
    </Container>
  );
}; 

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  sidebar: PropTypes.func.isRequired,
};

export default DashboardLayout;