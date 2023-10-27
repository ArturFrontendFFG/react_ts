import { FC, ReactNode } from "react";

interface IListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export function List<T> (props: IListProps<T>){
    return (
        <div style={{ display: "grid", gap: 15 }}>
            {props.items.map(props.renderItem)}
        </div>
    )
}
