import { forwardRef } from "react";
import { withDimension } from "./WithDimensions";

const Comp2 = (props, ref) => {
  return (
    <div className="comp2" ref={ref}>
      <span>
        Widhth: {props.width}, height: {props.height}
      </span>
    </div>
  );
};

export default withDimension(forwardRef(Comp2));
