import * as React from 'react';


class Base extends React.Component<any, object> {
    private name = 'Base component'
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
        <div className="Base">
          <h3 onClick={this.clickHandle}>{this.name}</h3>
        </div>
      );
    }
}
export default Base;
