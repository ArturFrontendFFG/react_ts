import { FC, ReactNode, useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  children: ReactNode;
  variant: CardVariant;
  onClick: (a: number) => void;
}

export const Card: FC<CardProps> = ({
  width,
  height,
  children,
  variant,
  onClick,
}) => {
  const [state, setState] = useState<number>(0);
  return (
    <div
      onClick={() => onClick(state)}
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid grey" : "none",
        background: variant === CardVariant.primary ? "pink" : "none",
      }}
    >
      {children}
    </div>
  );
};
