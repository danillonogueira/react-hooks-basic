import { Segment } from 'semantic-ui-react';
import { CounterContextProvider } from './../contexts/counter-context';
import CounterDisplay from './../components/counter-display';
import CounterButtons from './../components/counter-buttons';

export const CounterView = () => {
  return (
    <CounterContextProvider>
      <h3>Counter</h3>
      <Segment textAlign="center">
        <CounterDisplay />
        <CounterButtons />
      </Segment>
    </CounterContextProvider>
  );
}

export default CounterView;
