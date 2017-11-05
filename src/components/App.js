import React from 'react';
import Header from './Header';
import iScroll from 'iscroll';
import ReactIScroll from 'react-iscroll';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            headerTitle:0
        };
    }
    render(){
        let titles=['홈', '설정'];
        let title=titles[this.state.headerTitle];
        return  (
            <div>
                <Header title={titles[this.state.headerTitle]}/>
                <Tabs>
                    <section className="content">
                        <ReactIScroll iScroll={iScroll}>
                            <TabPanel>
                                <h2>Any content 1</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                        </ReactIScroll>
                    </section>
                    <TabList>
                        <Tab onClick={
                            ()=>this.setState({headerTitle:0})
                        }><i className="icon-home" aria-hidden="true"></i>{titles[0]}</Tab>
                        <Tab onClick={
                            ()=>this.setState({headerTitle:1})
                        }><i className="icon-cog" aria-hidden="true"></i>{titles[1]}</Tab>
                    </TabList>
                </Tabs>
            </div>
        );
    }
}

export default App;