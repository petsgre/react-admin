import * as React from "react";

interface IProps {
  name: string;
}

class PersonalCenter extends React.Component<IProps, object> {
  public name = "personal center page";
  constructor(props: any) {
    super(props);
  }
  public async componentDidMount() {
    // todo
  }

  public render() {
    return (
      <div className="about">
        <h3>{this.name}</h3>
      </div>
    );
  }
}

export default PersonalCenter;
