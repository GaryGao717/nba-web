/**
 * Created by gy on 4/12/18.
 */
import React from 'react';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';
import { Radio, Switch } from 'antd';
import _ from 'lodash';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayTooltip: true
    }

    onCountSliderChange = (count) => {
        // console.log(count);
        this.setState({ minCount: count });
    }

    onChartTypeChange = (e) => {
        console.log(e.target.value);
        this.setState({ chartType: e.target.value });
    }

    onTooltipChange = (displayTooltip) => {
        // console.log(displayTooltip);
        this.setState({ displayTooltip });
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}
                    displayTooltip={this.state.displayTooltip}/>
                <div className="filter">
                    {this.state.chartType === 'hexbin' ?
                        <CountSlider onCountSliderChange={_.debounce(this.onCountSliderChange, 500)} /> : null }
                    <br/>
                    <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                        <Radio value="hexbin">hexbin</Radio>
                        <Radio value="scatter">scatter</Radio>
                    </RadioGroup>
                    <Switch
                        checkedChildren="On"
                        unCheckedChildren="Off"
                        onChange={this.onTooltipChange}
                        defaultChecked />
                </div>
            </div>
        );
    }
}
