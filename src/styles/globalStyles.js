import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 12px;
  width: 12px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 19px;
  width: 19px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 22px;
  width: 22px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
 
`;

export const TextTitle = styled.p`
  color: var(--primary-text);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
`;

export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.6;
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;
