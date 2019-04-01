import * as React from 'react';
import Person from '../model/Person'

interface IProps {
  cb(): void
}

class Sub extends React.Component<IProps, object> {
  public p: Person = new Person()
  public name = 'Sub com'
  constructor(props: any) {
    super(props);
    // this.clickHandle = this.clickHandle.bind(this);
  }
  public componentDidMount() {
    console.log(this);
  }
  public cb() {
    this.props.cb()
  }
  public clickHandle(vm: any) {
    this.cb()
  }
  public beforeClick = (vm: any) => {
    console.log(vm);
    this.clickHandle(this)
  }
  public render() {
    return (
      <div className="Sub">
        {/* <h3 onClick={this.clickHandle.bind(this, this)}>{this.name}</h3> */}
        <h3 onClick={this.beforeClick.bind(this, 1)}>{this.name}</h3>
      </div>
    );
  }
}

export default Sub;
