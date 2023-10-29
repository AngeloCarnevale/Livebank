import React from "react";

export default function Container({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <main className="flex flex-col justify-center">{children}</main>;
}
