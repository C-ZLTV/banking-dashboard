import React from "react";
import "./Card.scss";
import { getActiveClasses } from "../../style/utils";

export interface CardProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  bordered?: boolean;
  loading?: boolean;
  actions?: React.ReactNode[];
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function Card({
  title,
  extra,
  bordered = true,
  loading = false,
  actions = [],
  children,
  className = "",
  style,
}: CardProps) {
  const cardClass = [
    getActiveClasses({
      card: true,
      "card--bordered": bordered,
      "card--loading": loading,
    }),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const renderHeader = () => {
    if (!title && !extra) return null;

    return (
      <div className="card__header">
        <div className="card__header-wrapper">
          {title && <div className="card__title">{title}</div>}
          {extra && <div className="card__extra">{extra}</div>}
        </div>
      </div>
    );
  };

  const renderBody = () => {
    return (
      <div className="card__body">{loading ? "Loading..." : children}</div>
    );
  };

  const renderActions = () => {
    if (!actions || actions.length === 0) return null;

    return (
      <ul className="card__actions">
        {actions.map((action, index) => (
          <li key={index} className="card__action-item">
            {action}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={cardClass} style={style}>
      {renderHeader()}
      {renderBody()}
      {renderActions()}
    </div>
  );
}

export default Card;
