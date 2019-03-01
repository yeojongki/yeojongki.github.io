import React from 'react';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';
import PropTypes from 'prop-types';
import DatePicker from 'rc-calendar/lib/Picker';

const format = 'YYYY';
function getFormat(time) {
  return time ? format : 'YYYY-MM-DD';
}

class Demo extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.object,
    defaultCalendarValue: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      picker: null,
      value: props.defaultValue
    };
  }

  onChange = (value, callback) => {
    console.log(callback);
    console.log('DatePicker change: ', value && value.format(format));
    this.setState({
      value
    });
    // https://github.com/react-component/calendar/blob/master/src/Picker.jsx#L172
    this.picker.close();
  };

  render() {
    const state = this.state;
    const calendar = (
      <Calendar
        onPanelChange={this.onChange}
        mode='year'
        style={{ zIndex: 1000 }}
        dateInputPlaceholder='please input'
        defaultValue={this.props.defaultCalendarValue}
      />
    );
    return (
      <div style={{ width: 400, margin: 20 }}>
        <div
          style={{
            boxSizing: 'border-box',
            position: 'relative',
            display: 'block',
            lineHeight: 1.5,
            marginBottom: 22
          }}
        >
          <DatePicker
            animation='slide-up'
            calendar={calendar}
            value={state.value}
            ref={picker => (this.picker = picker)}
          >
            {({ value }) => {
              return (
                <span tabIndex='0'>
                  <input
                    placeholder='please select'
                    style={{ width: 250 }}
                    readOnly
                    tabIndex='-1'
                    className='ant-calendar-picker-input ant-input'
                    value={(value && value.format(getFormat(state.showTime))) || ''}
                  />
                </span>
              );
            }}
          </DatePicker>
        </div>
      </div>
    );
  }
}

export default Demo;
