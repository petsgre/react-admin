import * as React from 'react';
import Person from '../model/Person'

interface IProps {
  name: string;
}

class Wel extends React.Component<IProps, object> {
  public p: Person = new Person()
  public name = 'help page'
  constructor(props: any) {
    super(props);
  }
  public componentDidMount() {
    console.log(this.name);
    
  }
  public render() {
    return (
      <div className="help">
        <h3>{this.name}</h3>
      </div>
    );
  }
}

export default Wel;
