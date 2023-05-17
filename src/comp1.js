import { forwardRef } from "react";
import { withDimension } from "./WithDimensions";

const Comp1 = (props, ref) => {
  return (
    <div className="comp1" ref={ref}>
      <span>Widhth: 200, height: 200</span>
      <span>
        Calculate: {props?.height} width: {props.width}
      </span>
    </div>
  );
};

export default withDimension(forwardRef(Comp1));
