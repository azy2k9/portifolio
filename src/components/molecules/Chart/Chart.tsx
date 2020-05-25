import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { StyledChart } from './Chart.styled';

interface Props {
  data: Array<Object>;
  color: string;
}

const Chart: React.FC<Props> = ({ data, color }: Props) => {
  return (
    <StyledChart>
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={600}
        height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          dataKey="skill"
          stroke="#fff"
          fill={color}
          color="#fff"
          fillOpacity={0.9}
        />
      </RadarChart>
    </StyledChart>
  );
};

export default Chart;
