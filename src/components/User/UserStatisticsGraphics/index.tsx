import { useMemo } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";
import { GetStatisticsProps } from "../../../types/useGetStatisticsType";
import { SectionWrapper, BoxGraphicItem } from "./styles";

type UserStatisticsGraphicsProps = {
  stats: GetStatisticsProps[];
};

export default function UserStatisticsGraphics({
  stats,
}: UserStatisticsGraphicsProps) {
  const accessTotal = useMemo(() => {
    const total = stats.reduce((acc, item) => {
      return (acc += Number(item.acessos));
    }, 0);

    return total || 0;
  }, [stats]);

  const transformStats = useMemo(() => {
    const transformArrayStats = stats.map((item) => ({
      x: item.title,
      y: Number(item.acessos),
    }));

    return transformArrayStats;
  }, [stats]);

  return (
    <SectionWrapper className="animeLeft">
      <BoxGraphicItem>
        <p>Acessos: {accessTotal}</p>
      </BoxGraphicItem>
      <BoxGraphicItem>
        {transformStats.length > 0 && (
          <VictoryPie
            data={transformStats}
            innerRadius={50}
            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: "#fff",
                strokeWidth: 2,
              },
              labels: {
                fontSize: 14,
                fill: "#333",
              },
            }}
          />
        )}
      </BoxGraphicItem>
      <BoxGraphicItem>
        <VictoryChart>
          <VictoryBar data={transformStats} alignment="start" />
        </VictoryChart>
      </BoxGraphicItem>
    </SectionWrapper>
  );
}
