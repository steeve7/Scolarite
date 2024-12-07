import React from "react";

export function ListChildren(children,CloneWithProps = {}){
    const childrenWithProps = React.Children.map(children, (child,index) =>
        React.cloneElement(child, { key: index, ...CloneWithProps })
      );
    return childrenWithProps

}