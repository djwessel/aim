import React from 'react';

import { ILine, ILineChartProps } from '../LineChart/LineChart';
import { IActivePoint } from 'types/utils/d3/drawHoverAttributes';
import { ChartTypeEnum } from 'utils/d3';
import { IProcessedData } from 'types/utils/d3/processData';
import { IFocusedState } from '../../services/models/metrics/metricsAppModel';

export interface IChartPanelProps {
  chartType: ChartTypeEnum;
  data: ILine[][];
  focusedState: IFocusedState;
  chartProps: Omit<ILineChartProps, 'data' | 'index' | 'syncHoverState'>[];
  controls: React.ReactNode;
  onActivePointChange?: (
    activePoint: IActivePoint,
    focusedStateActive?: boolean,
  ) => void;
}

export interface IChartPanelRef {
  setActiveLine: (rowKey: string) => void;
  updateLines: (data: IProcessedData[]) => void;
}