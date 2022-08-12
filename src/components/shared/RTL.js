import { create } from 'jss';
import rtl from 'jss-rtl';
import { JssProvider } from 'react-jss';
import { createGenerateClassName, jssPreset } from '@material-ui/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

const RTL = (props) => {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      {props.children}
    </JssProvider>
  );
}

export default RTL;