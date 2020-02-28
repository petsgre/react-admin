import * as React from "react";
interface IProps {
  children: <T>(para: T) => React.ReactNode;
  // children<T>(para: T): React.ReactNode;
  [property: string]: any;
}
type Card = {
  name: string;
};
function bar<T>(name: T): T {
  console.log(name);
  
  return name;
}
bar<Card>({ name: "kk" });
class PersonalCenter extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = { name: "123" };
  }
  public async componentDidMount() {
    // todo
  }

  public render() {
    return (
      <div>
        {this.props.children("zx")}
        {this.props.children(666)}
        {this.props.xxx || "null"}
      </div>
    );
  }
}

export default PersonalCenter;
