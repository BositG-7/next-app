import React from "react";

interface Props {
  params: { slug: string[] };
}

const Slog = ({ params: { slug } }: Props) => {
  return <div>Slog {slug}</div>;
};

export default Slog;
