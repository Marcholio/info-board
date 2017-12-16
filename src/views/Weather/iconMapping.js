import { fromJS } from 'immutable';

const iconMap = fromJS({
  200: {
    day: 'wi-day-storm-showers',
    night: 'wi-night-alt-storm-showers',
  },
  201: {
    day: 'wi-storm-showers',
    night: 'wi-storm-showers',
  },
  202: {
    day: 'wi-thunderstorm',
    night: 'wi-thunderstorm',
  },
  210: {
    day: 'wi-thunderstorm',
    night: 'wi-thunderstorm',
  },
  211: {
    day: 'wi-thunderstorm',
    night: 'wi-thunderstorm',
  },
  212: {
    day: 'wi-thunderstorm',
    night: 'wi-thunderstorm',
  },
  221: {
    day: 'wi-thunderstorm',
    night: 'wi-thunderstorm',
  },
  230: {
    day: 'wi-day-storm-showers',
    night: 'wi-night-alt-storm-showers',
  },
  231: {
    day: 'wi-storm-showers',
    night: 'wi-storm-showers',
  },
  232: {
    day: 'wi-thunderstorm',
    night: 'wi-thunderstorm',
  },
  300: {
    day: 'wi-day-hail',
    night: 'wi-night-alt-hail',
  },
  301: {
    day: 'wi-hail',
    night: 'wi-hail',
  },
  302: {
    day: 'wi-hail',
    night: 'wi-hail',
  },
  310: {
    day: 'wi-day-hail',
    night: 'wi-night-alt-hail',
  },
  311: {
    day: 'wi-hail',
    night: 'wi-hail',
  },
  312: {
    day: 'wi-rain',
    night: 'wi-rain',
  },
  313: {
    day: 'wi-rain',
    night: 'wi-rain',
  },
  314: {
    day: 'wi-rain',
    night: 'wi-rain',
  },
  321: {
    day: 'wi-rain',
    night: 'wi-rain',
  },
  500: {
    day: 'wi-day-showers',
    night: 'wi-night-showers',
  },
  501: {
    day: 'wi-rain',
    night: 'wi-rain',
  },
  502: {
    day: 'wi-rain',
    night: 'wi-rain',
  },
  503: {
    day: 'wi-rain',
    night: 'wi-rain',
  },
  504: {
    day: 'wi-rain',
    night: 'wi-rain',
  },
  511: {
    day: 'wi-day-rain-mix',
    night: 'wi-night-rain-mix',
  },
  520: {
    day: 'wi-day-showers',
    night: 'wi-night-showers',
  },
  521: {
    day: 'wi-rain',
    night: 'wi-rain',
  },
  522: {
    day: 'wi-rain',
    night: 'wi-rain',
  },
  531: {
    day: 'wi-rain',
    night: 'wi-rain',
  },
  600: {
    day: 'wi-day-snow',
    night: 'wi-night-alt-snow',
  },
  601: {
    day: 'wi-snow',
    night: 'wi-snow',
  },
  602: {
    day: 'wi-snow',
    night: 'wi-snow',
  },
  611: {
    day: 'wi-snow',
    night: 'wi-snow',
  },
  612: {
    day: 'wi-day-rain-mix',
    night: 'wi-night-rain-mix',
  },
  615: {
    day: 'wi-rain-mix',
    night: 'wi-rain-mix',
  },
  616: {
    day: 'wi-rain-mix',
    night: 'wi-rain-mix',
  },
  620: {
    day: 'wi-rain-mix',
    night: 'wi-rain-mix',
  },
  621: {
    day: 'wi-rain-mix',
    night: 'wi-rain-mix',
  },
  622: {
    day: 'wi-rain-mix',
    night: 'wi-rain-mix',
  },
  701: {
    day: 'wi-day-fog',
    night: 'wi-night-fog',
  },
  711: {
    day: 'wi-smoke',
    night: 'wi-smoke',
  },
  721: {
    day: 'wi-day-haze',
    night: 'wi-fog',
  },
  731: {
    day: 'wi-dust',
    night: 'wi-dust',
  },
  741: {
    day: 'wi-day-fog',
    night: 'wi-night-fog',
  },
  751: {
    day: 'wi-sandstorm',
    night: 'wi-sandstorm',
  },
  761: {
    day: 'wi-dust',
    night: 'wi-dust',
  },
  762: {
    day: 'wi-volcano',
    night: 'wi-volcano',
  },
  771: {
    day: 'wi-strong-wind',
    night: 'wi-strong-wind',
  },
  781: {
    day: 'wi-tornado',
    night: 'wi-tornado',
  },
  800: {
    day: 'wi-day-sunny',
    night: 'wi-night-clear',
  },
  801: {
    day: 'wi-day-cloudy',
    night: 'wi-night-alt-cloudy',
  },
  802: {
    day: 'wi-day-cloudy',
    night: 'wi-night-alt-cloudy',
  },
  803: {
    day: 'wi-cloud',
    night: 'wi-cloud',
  },
  804: {
    day: 'wi-cloudy',
    night: 'wi-cloudy',
  },
  900: {
    day: 'wi-tornado',
    night: 'wi-tornado',
  },
  901: {
    day: 'wi-hurricane',
    night: 'wi-hurricane',
  },
  902: {
    day: 'wi-hurricane',
    night: 'wi-hurricane',
  },
  903: {
    day: 'wi-snowflake-cold',
    night: 'wi-snowflake-cold',
  },
  904: {
    day: 'wi-clear',
    night: 'wi-night-clear',
  },
  905: {
    day: 'wi-strong-wind',
    night: 'wi-strong-wind',
  },
  906: {
    day: 'wi-day-hail',
    night: 'wi-night-alt-hail',
  },
});

export default (id, day) =>
  iconMap.getIn([id, day ? 'day' : 'night']) || 'wi-na';
