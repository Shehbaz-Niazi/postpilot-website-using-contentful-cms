import { MutableRefObject } from "react";

export interface ButtonProps {
  title: string;
  className?: string;
}

export interface PostCardProps {
  italicTitile?: string;
  headngH2: string;
  paragraph: string;
  boxPragraph: string;
  commaImage: ImagePropsType;
  obviImg: ImagePropsType;
  italicTitile2?: string;
  imageAuthor: string;
}

export interface ImagePropsType {
  src: any;
  alt: any;
  className?: string;
}

export interface BrandCards {
  heading1: string;
  heading2: string;
  paragraph: string;
  BrandImage: BrandCardImage;
  className?: string;
}

export interface BrandCardImage {
  src: any;
  alt: any;
  className?: string;
}

export interface DragCardProps {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className: string;
  name: string,
  message: string,
  stars: number
}

// { containerRef, src, alt, top, left, rotate, className }
