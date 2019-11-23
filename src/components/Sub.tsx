import * as React from 'react';
import Person from '../model/Person'


class Sub extends React.Component<any, object> {
  public p: Person = new Person()
  public name = 'Sub com'
  constructor(props: any) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }
  public componentDidMount() {
    console.log(this);
  }
  public clickHandle() {
    console.log(this);

  }
  public render() {
    return (
      <div className="Sub">
        <h3 onClick={this.clickHandle}>{this.name}</h3>
      </div>
    );
  }
}

export default Sub;
