import * as React from 'react';
import * as api from '@/api'

class Base extends React.Component<any, any> {
  public name = 'Base component'
  protected readonly constants = 222
  protected readonly api: any = api.default
  constructor(props: any) {
    super(props);
  }
  public componentDidMount() {
    // console.log(this);
  }
}
export default Base;
