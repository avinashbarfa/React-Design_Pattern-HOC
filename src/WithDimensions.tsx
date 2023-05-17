import { useEffect, useRef, useState } from "react";

export const withDimension = (Element) => {
  const WithDimension = (props) => {
    const ref = useRef();
    const [property, setProperty] = useState({ height: 0, width: 0 });
    const current = ref?.current;

    useEffect(() => {
      if (ref.current) {
        setProperty({
          height: ref.current.clientHeight,
          width: ref.current.clientWidth
        });
      }
    }, [current]);

    return (
      <Element
        width={property.width}
        height={property.height}
        ref={ref}
        {...props}
      />
    );
  };
  return WithDimension;
};
