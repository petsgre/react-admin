import axios from "axios";
import * as React from 'react';
import Person from './model/Person';
import Messages from './Message';

import {
  Route,Prompt
} from 'react-router-dom';
interface IProps {
  name: string;
  enthusiasmLevel?: number;
  router: any;
  route: any;
}

class Wel extends React.Component<IProps, object> {
  public my: string = '1';
  public str: number = 123;
  public p: Person = new Person()
  constructor(props: any) {
    super(props);
    this.my = '123';
    this.routerWillLeave = this.routerWillLeave.bind(this);
  }
  public show(): string {
    axios.get('api/cities')
      .then(response => {
        // handle success
        console.log(response);
      })
      .catch(error => {
        // handle error
        // console.log(error);
      })
      .then(_ => {
        // always executed
        // console.log(1);

      });
    // this.p.name = '18'
    // console.log(this.p)
    // this.p.getName()
    // const someValue: any = "this is a string";
    // const strLength: number = someValue.length;
    // console.log(strLength)
    return this.p.name
  }
  public componentDidMount() {
    this.show()
    console.log(this);
    // this.props.router.setRouteLeaveHook(
    //   this.props.route[1],
    //   this.routerWillLeave(1)
    // )
  }
  public routerWillLeave(nextLocation: any) {
    console.log('******************');

    console.log(nextLocation);
    if (!(this.state as any).isSaved) {
      console.log(this);

    }
  }
  public render() {
    const { match }: any = this.props;
    return (
      <div className="Wel">
        <h3>{this.props.name}</h3>
        <h3>{this.my}666</h3>
        <Route
          exact={false}
          path={`${match.path}/messages/:id`}
          component={Messages} onChange={this.routerWillLeave} params={ {id: 'Jkei3c32'} } />
          <Prompt message="确定要离开？" />
      </div>
    );
  }
}

export default Wel;
