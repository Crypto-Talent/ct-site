import { PropsWithChildren } from "react";

export interface SeoProps extends PropsWithChildren {
  description: string;
  title: string;
}
