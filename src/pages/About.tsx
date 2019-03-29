import * as React from 'react';
import Person from '../model/Person'
import request from '@/api/request'

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
    // console.log(this.name);
    const res = await request({
      method: 'post',
      url: `http://www.baidu.com`,
    })
    console.log(res);
  }
  public render() {
    return (
      <div className="about">
        <h3>{this.name}</h3>
      </div>
    );
  }
}

export default Wel;
