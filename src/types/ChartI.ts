export interface chartDataObject {
  month: string;
  expanded: number;
  original: number;
}

export interface dataSetsI {
  label: string;
  color: string;
  dataKey: "original" | "expanded";
}

export interface chartDataI {
  info: chartDataObject[] | undefined;
  dataset: dataSetsI[];
  title: string;
  Xtitle: string;
  Ytitle: string;
}
