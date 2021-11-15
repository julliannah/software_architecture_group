import React from 'react';

import {
  CardDeck,
} from 'reactstrap';
import { getColor } from 'utils/colors';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
        <CardDeck style={{ marginBottom: '1rem' }}></CardDeck>
    );
  }
}
export default DashboardPage;
