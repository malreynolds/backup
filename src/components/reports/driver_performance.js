import React, { Component } from 'react';
import classnames from 'classnames';
import MyApp from '../grid/myApp.jsx';
import DataGraph from './graph.js';
import Sidebar, {
  SidebarItem,
  DateRangeDropright,
  EventTypeDropright,
  ActionsDropright,
} from '../sidebar.js';
import Dropright from '../dropright.js';
import TabbedDataContainer from '../tabbed-data-container';
import MetricPanel from '../metric-panel.js';
import MetricItem from '../metric-item.js';
import {
  Breadcrumb, Tab
} from 'react-bootstrap';


export default class DriverPerformanceReport extends Component {

    render() {
        return (
            <div className="body">
              <Sidebar>
                 <SidebarItem title="Individual Drivers/Vehicles">
                    <Dropright></Dropright>
                </SidebarItem>
                <SidebarItem title="Vehicle Groups">
                    <Dropright></Dropright>
                </SidebarItem>
                <SidebarItem title="Date Range">
                    <DateRangeDropright/>
                </SidebarItem>
                <SidebarItem title="Event Type">
                    <EventTypeDropright/>
                </SidebarItem>
                <SidebarItem title="Actions">
                    <ActionsDropright/>
                </SidebarItem>
              </Sidebar>
              <Breadcrumb className="main-breadcrumb">
                <Breadcrumb.Item href="#">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                  Kinesis
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                  Driver Performance
                </Breadcrumb.Item>
              </Breadcrumb>
              <div className="container-fluid">
                  <MetricPanel title="Fleet Metrics - Average Score / Number of Events - Last 8 Weeks">
                    <MetricItem title="Overall" score={74} num_events="3.4"/>
                    <MetricItem title="Speeding" score={20} num_events="10.2"/>
                    <MetricItem title="Harsh Acceleration" score={48} num_events="11.4"/>
                    <MetricItem title="Harsh Braking" score={82} num_events="9.3"/>
                    <MetricItem title="Idling" score={12} num_events="8.9"/>
                  </MetricPanel>
                  <TabbedDataContainer
                      filtersTitle="All Drivers - 28/03 to 22/05"
                      dataTitle="Weekly View">
                    <Tab.Pane eventKey="first">
                      <MyApp/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <DataGraph/>
                    </Tab.Pane>
                  </TabbedDataContainer>
              </div>
            </div>
        );
    }
}
