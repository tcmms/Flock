/**
 * Card component — a wrapper around Ant Design's Card.
 *
 * A versatile container for displaying content in a structured format.
 * Supports cover images, actions, loading state, and grid layout.
 *
 * Also exports Card.Meta and Card.Grid sub-components.
 *
 * @see https://ant.design/components/card
 */
import { Card as AntCard } from 'antd';
export type { CardProps } from 'antd';

export const Card = AntCard;
export const CardMeta = AntCard.Meta;
export const CardGrid = AntCard.Grid;
