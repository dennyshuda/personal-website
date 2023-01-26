import { ContainerType } from "../models";

export function Container({ children }: ContainerType) {
  return <div className="container mx-auto px-10">{children}</div>;
}
