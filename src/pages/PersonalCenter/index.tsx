import * as React from "react";
import Sub from "./Sub";

interface IProps {
  name: string;
}

class PersonalCenter extends React.Component<IProps, object> {
  public name = "personal center page";
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  public async componentDidMount() {
    // todo
  }

  public render() {
    return (
      <div className="about">
        <h3>{this.name}</h3>
        <Sub>
          {(value: any) => {
            console.log(value);

            return <div>{value}</div>;
          }}
        </Sub>
      </div>
    );
  }
}

export default PersonalCenter;
