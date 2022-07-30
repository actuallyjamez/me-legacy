import React from "react";

interface LinkProps {
  name: string;
  href: string;
}

const Link = (props: LinkProps) => {
  return (
    <a
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
      className="hover:bg-neutral-200 rounded px-2 pt-1 pb-1.5 transition-colors active:bg-neutral-300"
    >
      {props.name}
    </a>
  );
};

export default Link;
