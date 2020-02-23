import React from 'react';
import RuleCard from './RuleCard';
import UploadPanel from './UploadPanel.js';
import Container from '@material-ui/core/Container';
import convert from '../../utils/yamlUtils'
import YAML from 'yaml'

export default function ImportPanel(props) {
  
  let yamlRules = [];
  const [values, setValues] = React.useState({
    buffer: '',
    myRules: []
  });

  const handleChangeForm = name => event => {
    setValues({ ...values, [name]: event.target.value});
  }

  const onSaveInput = () => {
    yamlRules = YAML.parseAllDocuments(values['buffer']);
    let rules = convert(yamlRules)
    setValues({myRules: rules})
  };
  return (
    <Container >
        <UploadPanel
        values={values}
        onChange={handleChangeForm('buffer')}
        onSaveInput={onSaveInput}
        />
        <div>
            {
                values.myRules.map((rule, i) => {
                if (rule){
                    return (<RuleCard values={rule} />)
                }
                else {
                    return (null)
                }
                })
            }
        </div>
  </Container>
  );
}
