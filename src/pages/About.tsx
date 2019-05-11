import * as React from 'react';
import Person from '../model/Person'
import request from '@/api/request'
import Sub from '@/components/Sub';


interface IProps {
  name: string;
}

class Wel extends React.Component<IProps, object> {
  public p: Person = new Person()
  public name = 'about page'
  constructor(props: any) {
    super(props);
  }
  public async componentDidMount() {
    const res = await request({
      method: 'get',
      url: `/test`,
    })
    console.log(res);
  }

  public render() {
    return (
      <div className="about">
        <h3>{this.name}</h3>
        <Sub />
      </div>
    );
  }
}

export default Wel;
