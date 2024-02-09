import styled from 'styled-components';

export interface SpanProps {
  color?: string;
  $fontWeight?: number;
}

export const Span = styled.span<SpanProps>`
  color: ${({ color }) => color ?? 'black'};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? 400};
`;
